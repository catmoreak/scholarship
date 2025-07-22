import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  if (!name) {
    return NextResponse.json({ error: 'No scholarship name provided.' }, { status: 400 });
  }

  // Use SerpAPI for fetching scholarship details
  const serpApiKey = process.env.SERP_API_KEY;
  if (!serpApiKey) {
    return NextResponse.json({ error: 'No SerpAPI key provided.' }, { status: 500 });
  }

  const endpoint = `https://serpapi.com/search.json?q=${encodeURIComponent(name + ' scholarship India')}&engine=google&api_key=${serpApiKey}`;
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    // Debug: log the response from SerpAPI
    console.log('SerpAPI response:', JSON.stringify(data, null, 2));
    // Extract richer details from organic_results
    const results = data.organic_results?.slice(0, 3).map((item: { title: string; snippet: string; link: string }) => ({
      title: item.title,
      snippet: item.snippet,
      link: item.link
    })) || [];
    return NextResponse.json({ results });
  } catch (err) {
    console.error('SerpAPI fetch error:', err);
    return NextResponse.json({ error: 'Failed to fetch from SerpAPI.' }, { status: 500 });
  }
}
