import React, { useState } from "react";

type ScholarshipResult = {
  title: string;
  snippet: string;
  link: string;
  eligibility?: string;
  amount?: string;
  deadline?: string;
  provider?: string;
  level?: string;
};

export default function ScholarshipAutoFetchForm() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ScholarshipResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  function isRelevantQuery(query: string) {
    // Allow if contains education keywords OR looks like a scholarship name (e.g., ends with 'scholarship', 'fellowship', 'grant')
    const keywords = [
      'scholarship', 'education', 'student', 'school', 'college', 'university', 'grant', 'fellowship'
    ];
    const lower = query.toLowerCase().trim();
    if (keywords.some(kw => lower.includes(kw))) return true;
    // Allow if ends with scholarship/fellowship/grant (common pattern)
    if (/(scholarship|fellowship|grant)\s*$/i.test(lower)) return true;
    // Allow if matches common scholarship name pattern (e.g., 'INSPIRE', 'NTSE', 'KVPY', etc.)
    const knownScholarships = [
      'inspire', 'ntse', 'kvpy', 'pmss', 'maulana azad', 'post matric', 'pre matric', 'gate', 'ugc', 'csir', 'swami vivekananda', 'sitaram jindal', 'aditya birla', 'hdfc', 'fair and lovely', 'tata', 'loreal', 'dr ambedkar', 'saksham', 'pragati', 'scholarship', 'fellowship', 'grant'
    ];
    return knownScholarships.some(kw => lower.includes(kw));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isRelevantQuery(name)) {
      setError('Please enter a scholarship or education-related search.');
      setResults([]);
      return;
    }
    setLoading(true);
    setError(null);
    setResults([]);
    try {
      const res = await fetch(`/api/fetch-scholarship?name=${encodeURIComponent(name)}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResults(data.results || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white/10 rounded-2xl border border-blue-400/30">
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter scholarship name..."
          className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Details"}
        </button>
      </form>
      {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
      {results.length > 0 && (
        <div className="mt-6 flex flex-col gap-8">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-7 shadow-xl bg-gradient-to-br from-purple-100 via-purple-50 to-white transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-800 mb-4 text-base leading-relaxed">{item.snippet}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-3">
                {item.eligibility && (
                  <div className="text-sm text-purple-900"><span className="font-semibold">Eligibility:</span> {item.eligibility}</div>
                )}
                {item.amount && (
                  <div className="text-sm text-purple-900"><span className="font-semibold">Amount:</span> {item.amount}</div>
                )}
                {item.deadline && (
                  <div className="text-sm text-purple-900"><span className="font-semibold">Deadline:</span> {item.deadline}</div>
                )}
                {item.provider && (
                  <div className="text-sm text-purple-900"><span className="font-semibold">Provider:</span> {item.provider}</div>
                )}
                {item.level && (
                  <div className="text-sm text-purple-900"><span className="font-semibold">Level:</span> {item.level}</div>
                )}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-700 font-semibold text-base underline mt-3 hover:text-purple-900 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0 0L10 21l-7-7 11-11z" /></svg>
                  View Source
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
