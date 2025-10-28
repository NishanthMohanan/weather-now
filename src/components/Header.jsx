import React, { useState } from "react";

export default function Header({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput("");
  };

  return (
    <header className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex items-center backdrop-blur-md bg-white/20 border border-white/30 rounded-full p-1 shadow-lg"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name..."
          className="flex-grow p-3 text-white placeholder-white/70 bg-transparent outline-none text-lg"
        />
        <button
          type="submit"
          className="bg-white/30 hover:bg-white/50 text-white font-semibold rounded-full px-5 py-2 transition"
        >
          Search
        </button>
      </form>
    </header>
  );
}
