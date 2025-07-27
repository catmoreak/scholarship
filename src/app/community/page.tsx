

"use client";

import React, { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { app } from '@/firebase/firebaseConfig';




const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DB_URL;
const db = getDatabase(app, dbUrl);

const auth = getAuth(app);

const CommunityPage = () => {

  type Message = {
    id: string;
    text: string;
    user: string;
    uid?: string;
    color?: string;
    timestamp?: number;
    photoURL?: string;
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
    });
    return () => unsubscribe();
  }, []);

  // Google sign in
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      alert('Google sign-in failed');
    }
  };

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
    } catch (err) {
      console.error('Failed to send message', err);
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
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900" style={{ fontFamily: '"Press Start 2P", monospace' }}>
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 flex flex-col items-center border border-purple-200 animate-fade-in-slow">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Sign in to join the Community Chat</h2>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-md text-base border border-purple-200 hover:scale-105 transition-all duration-150"
          >
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.711-1.57-3.914-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.652z"/><path fill="#34A853" d="M3.545 7.548l3.285 2.409c.895-1.7 2.66-2.909 4.67-2.909 1.27 0 2.41.438 3.305 1.16l2.48-2.48c-1.57-1.453-3.617-2.348-5.785-2.348-3.242 0-6.016 2.07-7.07 4.968z"/><path fill="#FBBC05" d="M12 22c2.43 0 4.477-.805 5.953-2.188l-2.734-2.234c-.75.508-1.703.82-3.219.82-2.457 0-4.539-1.656-5.285-3.883l-3.32 2.57c1.508 3.008 4.734 5.015 8.605 5.015z"/><path fill="#EA4335" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.148 0-3.359 2.75-6.148 6.125-6.148 1.922 0 3.211.82 3.953 1.523l2.703-2.625c-1.711-1.57-3.914-2.523-6.656-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.652z"/></g></svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900" style={{ fontFamily: '"Press Start 2P", monospace' }}>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-b from-purple-900/90 via-purple-800/70 to-transparent animate-fade-in-slow border-b-4 border-purple-800/60">
        <div className="flex items-center gap-4 mb-2">
          {user.photoURL && (
            <img src={user.photoURL} alt="avatar" className="w-10 h-10 rounded-full border-2 border-purple-300 shadow" />
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-100 tracking-widest drop-shadow-[0_2px_0_#a78bfa] animate-fade-in" style={{ fontFamily: '"Press Start 2P", monospace', letterSpacing: '0.1em' }}>Community Chat</h1>
        </div>
        <p className="text-purple-200 text-center text-base md:text-lg max-w-2xl font-medium animate-fade-in-slow" style={{ fontFamily: '"Press Start 2P", monospace' }}>A fun, friendly space to connect and discuss scholarships with others. Share tips, ask questions, and help each other succeed!</p>
        <button onClick={handleSignOut} className="mt-4 px-4 py-2 bg-purple-700 text-white rounded shadow hover:bg-purple-800 transition-all text-sm">Sign Out</button>
      </section>
      {/* Centered glass chat card */}
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
              return (
                <div
                  key={msg.id}
                  className={`mb-5 flex w-full ${align} ${flexDir}`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0">
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
                      <span className={`font-semibold text-xs ${isYou ? 'text-green-700' : 'text-gray-700'}`}>{msg.user || 'User'}</span>
                      <span className="text-[10px] text-gray-400">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
                      {isYou && <span className="ml-1 text-green-500">✔✔</span>}
                    </div>
                    <div className={`rounded-2xl px-5 py-3 shadow border ${bubbleBg} ${bubbleText} font-mono text-sm`} style={{ wordBreak: 'break-word' }}>{msg.text}</div>
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
              {sending
                ? 'Sending...'
                : sendCooldown > 0
                  ? `Wait ${sendCooldown}s`
                  : 'Send'}
            </button>
          </form>
        </div>
      </div>
      {/* Animations moved to global CSS */}
    </div>
  );
};

export default CommunityPage;
