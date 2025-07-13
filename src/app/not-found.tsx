import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-3xl p-12 max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-white mb-4">404</h1>
            <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-purple-200 text-lg mb-8">
              Sorry, we couldn't find the scholarship page you're looking for. 
              It might have been moved or doesn't exist.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200"
            >
              🏠 Go Home
            </Link>
            <div className="text-purple-300">
              <p>or</p>
            </div>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl border border-purple-400/30 transition-colors duration-200"
            >
              📖 Learn About Us
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-purple-400/30">
            <p className="text-purple-300 text-sm">
              Looking for scholarships? Try searching from our homepage!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
