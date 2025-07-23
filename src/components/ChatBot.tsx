import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { role: "user", content: input };
    let botReply = "Sorry, I didn't understand. Please ask about scholarships, eligibility, or application process.";
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("scholarship")) {
      botReply = "We match you with scholarships based on your profile. Try our search above!";
    } else if (lowerInput.includes("eligibility")) {
      botReply = "Eligibility varies by scholarship. Common criteria include academic percentage, income, and category.";
    } else if (lowerInput.includes("apply") || lowerInput.includes("application")) {
      botReply = "You can apply for scholarships directly on the provider's website. We provide verified links.";
    } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
      botReply = "Our team is here to help! Ask your question or use the search form above.";
    }
    setMessages([...messages, userMsg, { role: "bot", content: botReply }]);
    setInput("");
    setLoading(false);
  }

  if (!open) {
    return (
      <button
        className="fixed bottom-6 right-6 bg-purple-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center z-50 hover:bg-purple-800 transition"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
      >
        <span className="text-2xl">🤖</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-900 rounded-2xl shadow-2xl p-4 z-50 border-2 border-purple-400 flex flex-col animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg mr-2 text-purple-700 text-xl">🤖</span>
          <h3 className="font-bold text-white text-base">Scholarship ChatBot</h3>
        </div>
        <button
          className="text-white hover:text-purple-300 text-lg font-bold px-2 py-1 rounded-full focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close chatbot"
        >
          ×
        </button>
      </div>
      <div className="h-36 overflow-y-auto mb-3 text-sm bg-white/20 rounded-xl p-2 backdrop-blur">
        {messages.length === 0 && (
          <div className="text-center text-purple-100">Hi! How can I help you today?</div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right text-purple-200 mb-2" : "text-left text-white mb-2"}>
            <span className={msg.role === "user" ? "inline-block bg-purple-100 text-purple-900 px-3 py-2 rounded-2xl" : "inline-block bg-purple-700 text-white px-3 py-2 rounded-2xl"}>{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="mb-2 flex flex-wrap gap-2 justify-center">
        {['What scholarships are available?', 'What is the eligibility?', 'How do I apply?', 'I need help'].map((option, idx) => (
          <button
            key={idx}
            type="button"
            className="bg-white text-purple-700 font-semibold px-2 py-1 rounded-full shadow hover:bg-purple-100 transition text-xs"
            onClick={() => setInput(option)}
            disabled={loading}
          >
            {option}
          </button>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 border-2 border-purple-400 rounded-full px-3 py-1 bg-white/80 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
          placeholder="Type your question..."
          disabled={loading}
        />
        <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-1 rounded-full font-bold shadow transition disabled:opacity-50 text-sm" disabled={loading || !input}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
