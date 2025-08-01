"use client";


import GoogleIcon from './GoogleIcon';
import React, { useEffect, useRef, useState } from 'react';

import { getDatabase, ref, push, onValue, remove } from 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { app } from '@/firebase/firebaseConfig';

const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DB_URL;
const db = getDatabase(app, dbUrl);
const auth = getAuth(app);


type Message = {
  id: string;
  text: string;
  user: string;
  uid?: string;
  color?: string;
  timestamp?: number;
  photoURL?: string;
};

const CommunityPage = () => {
  // Google sign-in handler
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch {
      alert('Google sign-in failed');
    }
  };
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [imgErrorMap, setImgErrorMap] = useState<{ [id: string]: boolean }>({});
  const [sendCooldown, setSendCooldown] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Listen for auth state changes

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setTimeout(() => {
        if (!auth.currentUser) {
          alert('Google sign-in failed');
        }
      }, 1000);
    });
    return () => unsubscribe();
  }, []);

  // Sign out
  const handleSignOut = async () => {
    await signOut(auth);
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Listen for new messages (Realtime Database)
  useEffect(() => {
    const messagesRef = ref(db, 'community-messages');
    const handle = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Realtime DB snapshot:', data);
      const msgs: Message[] = data
        ? Object.entries(data).map(([id, val]) => ({ id, ...(val as Omit<Message, 'id'>) }))
        : [];
      msgs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      setMessages(msgs);
    });
    return () => handle();
  }, []);


  // Send message (Realtime Database) with 5s cooldown
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user || sendCooldown > 0) return;
    // Disallow all links (URLs) and adult-related content in messages
    const urlRegex = /(https?:\/\/|www\.|[a-zA-Z0-9.-]+\.(com|net|org|io|gov|edu|co|in|info|me|xyz|app|dev|ai|ca|uk|us|biz|site|online|store|tech|tv|cc|ru|cn|de|jp|fr|au|es|it|nl|se|no|fi|pl|ch|be|at|dk|tr|ir|ua|cz|gr|pt|ro|hu|sk|bg|lt|lv|ee|hr|si|rs|by|kz|ge|az|md|am|kg|uz|tj|tm|mn|vn|kr|my|sg|th|hk|tw|ph|id|pk|bd|lk|np|sa|ae|qa|kw|om|bh|jo|lb|sy|iq|ye|il|eg|ma|dz|tn|ly|sd|ss|et|ke|tz|ug|rw|bi|mw|zm|zm|zw|ao|cm|gh|ng|sn|ci|ml|bf|ne|tg|gm|sl|lr|gw|cv|st|gq|ga|cg|cd|cf|td|er|dj|so|mg|mu|sc|km|za|mz|bw|na|sz|ls|eg|ma|dz|tn|ly|sd|ss|et|ke|tz|ug|rw|bi|mw|zm|zm|zw|ao|cm|gh|ng|sn|ci|ml|bf|ne|tg|gm|sl|lr|gw|cv|st|gq|ga|cg|cd|cf|td|er|dj|so|mg|mu|sc|km|za|mz|bw|na|sz|ls|arpa|mil|int|pro|mobi|name|aero|jobs|museum|xxx|sex|adult|porn|cam|hot|club|red|tube|date|love|escort|lingerie|fetish|nude|naked|playboy|lust|erotic|babes|bdsm|kink|voyeur|amateur|anal|oral|blowjob|handjob|cum|dildo|pussy|cock|boobs|tits|milf|teen|gay|lesbian|trans|shemale|hentai|incest|taboo|bdsm|fetish|escort|escortservice|callgirl|callboy|gigolo|swinger|swingers|swing|swinging|swingclub|swingersclub|swingersparty|swingerparty|swingerdate|swingerdating|swingermeet|swingerfinder|swingersearch|swingercommunity|swingerforum|swingerchat|swingerweb|swingerworld|swingerzone|swingerlife|swingerplace|swingerroom|swingerhouse|swingerhotel|swingerresort|swingercruise|swingertravel|swingertrip|swingerholiday|swingervacation|swingerclubhouse|swingerbar|swingerpub|swingercafe|swingerrestaurant|swingerpartyhouse|swingerpartyclub|swingerpartynight|swingerpartyevent|swingerpartytour|swingerpartydestination|swingerpartylocation|swingerpartyplace|swingerpartyspot|swingerpartyvenue|swingerpartyarea|swingerpartycity|swingerpartycountry|swingerpartyregion|swingerpartyzone|swingerpartyworld|swingerpartynet|swingerpartyorg|swingerpartycom|swingerpartyonline|swingerpartysite|swingerpartyweb|swingerpartyforum|swingerpartycommunity|swingerpartychat|swingerpartyroom|swingerpartyhouse|swingerpartyhotel|swingerpartyresort|swingerpartycruise|swingerpartytravel|swingerpartytrip|swingerpartyholiday|swingerpartyvacation)\b)/i;
    const adultKeywords = [
      'porn', 'xxx', 'sex', 'adult', 'cam', 'escort', 'fetish', 'nude', 'naked', 'playboy', 'lust', 'erotic', 'babes', 'bdsm', 'kink', 'voyeur', 'amateur', 'anal', 'oral', 'blowjob', 'handjob', 'cum', 'dildo', 'pussy', 'cock', 'boobs', 'tits', 'milf', 'teen', 'gay', 'lesbian', 'trans', 'shemale', 'hentai', 'incest', 'taboo'
    ];
    if (urlRegex.test(input) || adultKeywords.some(word => input.toLowerCase().includes(word))) {
      alert('Links are not allowed');
      return;
    }
    setSending(true);
    try {
      const messagesRef = ref(db, 'community-messages');
      await push(messagesRef, {
        text: input,
        user: user.displayName || 'Anonymous',
        uid: user.uid,
        color: 'green',
        timestamp: Date.now(),
        photoURL: user.photoURL || '',
      });
      setInput('');
      setSendCooldown(5);
    } catch {
      console.error('Failed to send message');
      alert('Failed to send message');
    }
    setSending(false);
  };

  // Cooldown timer effect
  useEffect(() => {
    if (sendCooldown > 0) {
      const timer = setTimeout(() => setSendCooldown(sendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [sendCooldown]);


  if (!user) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 font-sans">
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col items-center border border-purple-200 animate-fade-in-slow">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Sign in to join the Community Chat</h2>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-md text-base border border-purple-200 hover:scale-105 transition-all duration-150"
            style={{ fontFamily: 'inherit' }}
          >
            <GoogleIcon style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-b from-purple-900/90 via-purple-800/70 to-transparent animate-fade-in-slow border-b-4 border-purple-800/60 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-100 tracking-widest drop-shadow-[0_2px_0_#a78bfa] animate-fade-in" style={{ letterSpacing: '0.1em' }}>Community Chat</h1>
        </div>
        <p className="text-purple-200 text-center text-base md:text-lg max-w-2xl font-medium animate-fade-in-slow">A fun, friendly space to connect and discuss scholarships with others. Share tips, ask questions, and help each other succeed!</p>
        <button onClick={handleSignOut} className="mt-4 px-4 py-2 bg-purple-700 text-white rounded shadow hover:bg-purple-800 transition-all text-sm">Sign Out</button>
      </section>
      {/* Centered blocky chat card */}
      <div className="flex-1 flex items-center justify-center w-full px-2 pb-8">
        <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-xl p-0 flex flex-col items-stretch border border-purple-200 animate-fade-in-slow">
          {/* Chat area and input */}
          <div className="flex-1 w-full h-[60vh] min-h-[350px] max-h-[600px] overflow-y-auto rounded-t-2xl p-6 border-b border-purple-100 custom-scrollbar" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)' }}>
            {messages.length === 0 && (
              <div className="text-center text-purple-400 mt-10 font-mono text-base">No messages yet. Start the conversation!</div>
            )}
            {messages.map((msg) => {
              const isYou = user && String(msg.uid || '') === String(user.uid);
              // Green for you (right), Gray for others (left)
              const bubbleBg = isYou ? 'bg-green-100' : 'bg-gray-100';
              const bubbleText = isYou ? 'text-green-900' : 'text-gray-900';
              const align = isYou ? 'justify-end' : 'justify-start';
              const flexDir = isYou ? 'flex-row-reverse' : 'flex-row';
              const avatarBorder = isYou ? 'border-green-300' : 'border-gray-300';
              let avatarUrl = '';
              if (isYou) {
                avatarUrl = user?.photoURL || msg.photoURL || '';
              } else {
                avatarUrl = msg.photoURL || '';
              }
              const imgError = imgErrorMap[msg.id] || false;
              // Delete handler
              const handleDelete = async () => {
                if (!msg.id) return;
                if (!window.confirm('Delete this message?')) return;
                try {
                  await remove(ref(db, `community-messages/${msg.id}`));
                } catch {
                  alert('Failed to delete message.');
                }
              };
              return (
                <div
                  key={msg.id}
                  className={`mb-6 flex w-full ${align} ${flexDir}`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0 mr-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {avatarUrl && !imgError ? (
                      <img
                        src={avatarUrl}
                        alt="avatar"
                        className={`w-10 h-10 rounded-full border ${avatarBorder} shadow object-cover bg-white`}
                        onError={() => setImgErrorMap(prev => ({ ...prev, [msg.id]: true }))}
                      />
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow border ${avatarBorder} bg-white text-gray-700`}>
                        {msg.user?.[0] || '?'}
                      </div>
                    )}
                  </div>
                  {/* Message bubble */}
                  <div className={`flex flex-col ${isYou ? 'items-end' : 'items-start'} ${isYou ? 'ml-auto mr-0' : 'ml-0 mr-auto'} max-w-[75%]`}>
                    <div className="flex items-center gap-2 mb-1">
                      {/* Delete button for your own messages, left of name, more subtle and modern */}
                      {isYou && (
                        <button
                          onClick={handleDelete}
                          className="bg-transparent border-none text-gray-300 hover:text-red-500 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-red-200"
                          title="Delete this message"
                          style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 6 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 7h12M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12zm-7 4v6m4-6v6" />
                          </svg>
                        </button>
                      )}
                      <span className={`font-semibold text-xs ${isYou ? 'text-green-700' : 'text-gray-700'} flex items-center`}>
                        {/* Online/offline status: green for you, red for others */}
                        <span
                          className={`inline-block w-2.5 h-2.5 rounded-full mr-1.5 border ${isYou ? 'animate-pulse-green' : 'animate-pulse-red'}`}
                          style={{ background: isYou ? '#22c55e' : '#ef4444', borderColor: isYou ? '#16a34a' : '#b91c1c' }}
                          title={isYou ? 'Online (You)' : 'Offline (Placeholder)'}
                        ></span>
                        {msg.user || 'User'}
                      </span>
                      <span className="text-[10px] text-gray-400">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
                      {isYou && <span className="ml-1 text-green-500">✔✔</span>}
                    </div>
                    <div className={`rounded-2xl px-6 py-3 shadow border ${bubbleBg} ${bubbleText} font-mono text-base`} style={{ wordBreak: 'break-word', minHeight: 40, letterSpacing: '0.01em', lineHeight: 1.6 }}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
          {/* Chat input area */}
          <form onSubmit={handleSend} className="flex gap-3 w-full px-6 py-5 bg-white rounded-b-2xl border-t border-purple-100" style={{ fontFamily: 'inherit' }}>
            <input
              className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white text-purple-900 text-base shadow placeholder:text-purple-400 font-mono"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={sending}
              maxLength={300}
              autoComplete="off"
            />
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-md text-base border border-purple-200 transition-all duration-150 ${sending || !input.trim() || sendCooldown > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={sending || !input.trim() || sendCooldown > 0}
            >
              {sending ? 'Sending...' : sendCooldown > 0 ? `Wait ${sendCooldown}s` : 'Send'}
            </button>
          </form>
        </div>
      </div>
      {/* Animations moved to global CSS */}
    </div>
  );
};

export default CommunityPage;
