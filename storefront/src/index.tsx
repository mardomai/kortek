import './index.css';
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">
        <section className="space-y-4">
          <p className="text-lg">
            This page features a red, black, and white theme using Tailwind CSS.
          </p>
          <a
            href="#"
            className="text-red-500 hover:underline transition-all duration-300"
          >
            Learn more about this theme.
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red text-white py-4 text-center">
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
};

export default HomePage;
