import React, { useState } from "react";

const Fireworks = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <button
        onClick={() => setShowText(true)}
        className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg"
      >
        Surprise Me
      </button>
      {showText && <h1 className="text-4xl font-bold mt-5">India Won 🎉</h1>}
    </div>
  );
};

export default Fireworks;
