import React from 'react';
import ReactMarkdown from 'react-markdown';
import content from '../content/LandingPage.md?raw';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="prose mx-auto p-8 text-noxo-primary max-w-3xl">
      <ReactMarkdown>{content}</ReactMarkdown>
      <div className="mt-6">
        <Link to="/login" className="bg-noxo-accent text-black px-4 py-2 rounded hover:scale-105 transition">🔥 Enter the Grid</Link>
      </div>
    </div>
  );
}
