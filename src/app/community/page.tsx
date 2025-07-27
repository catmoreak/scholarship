

"use client";

import React, { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { app } from '@/firebase/firebaseConfig';




const dbUrl = process.env.NEXT_PUBLIC_FIREBASE_DB_URL;
const db = getDatabase(app, dbUrl);

const CommunityPage = () => {

  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      const msgs = data
        ? Object.entries(data).map(([id, val]: any) => ({ id, ...val }))
        : [];
      msgs.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      setMessages(msgs);
    });
    return () => handle();
  }, []);

  // Send message (Realtime Database)
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setSending(true);
    try {
      const messagesRef = ref(db, 'community-messages');
      await push(messagesRef, {
        text: input,
        user: 'You',
        color: 'green',
        timestamp: Date.now(),
      });
      setInput('');
    } catch (err) {
      console.error('Failed to send message', err);
      alert('Failed to send message');
    }
    setSending(false);
  };


  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900" style={{ fontFamily: '"Press Start 2P", monospace' }}>
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-10 bg-gradient-to-b from-purple-900/90 via-purple-800/70 to-transparent animate-fade-in-slow border-b-4 border-purple-800/60">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-100 tracking-widest drop-shadow-[0_2px_0_#a78bfa] mb-2 animate-fade-in" style={{ fontFamily: '"Press Start 2P", monospace', letterSpacing: '0.1em' }}>Community Chat</h1>
        <p className="text-purple-200 text-center text-base md:text-lg max-w-2xl font-medium animate-fade-in-slow" style={{ fontFamily: '"Press Start 2P", monospace' }}>A fun, friendly space to connect and discuss scholarships with others. Share tips, ask questions, and help each other succeed!</p>
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
              const isYou = msg.user === 'You';
              // Green for 'You', Red for others
              let bg = isYou ? 'bg-green-50' : 'bg-red-50';
              let border = isYou ? 'border-green-200' : 'border-red-200';
              let text = isYou ? 'text-green-900' : 'text-red-900';
              let avatarBg = isYou ? 'bg-green-200' : 'bg-red-200';
              let avatarText = isYou ? 'text-green-800' : 'text-red-800';
              return (
                <div key={msg.id} className={`mb-6 flex items-end gap-3 ${isYou ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shadow border ${avatarBg} ${avatarText}`}>{msg.user?.[0] || '?'}</div>
                  <div className={`flex flex-col ${isYou ? 'items-end' : 'items-start'}`}>
                    <span className={`font-semibold text-xs mb-1 ${text}`}>{msg.user || 'User'} <span className="text-[10px] text-gray-400 ml-2">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}{isYou && <span className='ml-1'>✔✔</span>}</span></span>
                    <div className={`relative max-w-md min-w-[60px] ${isYou ? 'ml-auto' : ''}`}>
                      <div className={`px-5 py-3 rounded-xl shadow border ${bg} ${border} ${text} font-mono text-sm transition-all duration-150`} style={{ wordBreak: 'break-word' }}>{msg.text}</div>
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
              className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-md text-base border border-purple-200 transition-all duration-150 ${sending || !input.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={sending || !input.trim()}
            >
              {sending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
      {/* Animations moved to global CSS */}
    </div>
  );
};

export default CommunityPage;
