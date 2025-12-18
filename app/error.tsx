"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-light text-gray-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 font-light mb-6">
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 font-light"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
