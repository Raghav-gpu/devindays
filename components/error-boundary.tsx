"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6">
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-light text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 font-light mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 font-light"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

