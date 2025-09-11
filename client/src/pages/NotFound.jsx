// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-background)] text-[var(--color-text)] px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-[var(--color-primary)] drop-shadow-lg">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
          Oops! Page not found
        </p>
        <p className="mt-2 text-[var(--color-muted)] max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved.  
        </p>

        {/* Back Home Button */}
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl text-lg font-medium shadow-md transition 
                       bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-[var(--color-muted)]">
        &copy; {new Date().getFullYear()} Hotel Management Project
      </p>
    </div>
  );
}
