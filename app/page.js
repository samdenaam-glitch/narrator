"use client";

import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("landing");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const generateAudio = () => {
    if (!text) return alert("Enter text first.");

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ padding: "40px" }}>
      {view === "landing" && (
        <div style={{ textAlign: "center", paddingTop: "120px" }}>
          <h1 style={{ fontSize: "60px" }}>
            Turn Words Into Revenue-Generating Audiobooks
          </h1>
          <p style={{ color: "#aaa", fontSize: "20px" }}>
            Free AI Voice Engine. Monetize instantly.
          </p>
          <button
            onClick={() => setView("app")}
            style={{ padding: "20px 40px", marginTop: "40px" }}
          >
            Start Creating
          </button>
        </div>
      )}

      {view === "app" && (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Create Audiobook</h2>

          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          <textarea
            placeholder="Paste your text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: "100%", height: "200px", padding: "10px" }}
          />

          <button
            onClick={generateAudio}
            style={{ padding: "15px 30px", marginTop: "20px" }}
          >
            Generate (Free Voice)
          </button>
        </div>
      )}
    </div>
  );
}