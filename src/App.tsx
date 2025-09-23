import { useState } from "react";
import { artworks } from "./Data/artworks";
import type { Artwork } from "./Data/artworks";

function App() {
  // 1. Tag die de gebruiker heeft gekozen
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 2. Alle unieke tags uit de data halen
  const uniqueTags = Array.from(new Set(artworks.flatMap((a) => a.tags)));

  // 3. De lijst filteren op de gekozen tag
  const filteredArtworks = selectedTag
    ? artworks.filter((a) => a.tags.includes(selectedTag))
    : artworks;

  // 🔑 4. Nieuw: state voor de geopende afbeelding
  const [activeArtwork, setActiveArtwork] = useState<Artwork | null>(null);

  return (
    <div>
      <h1>Huib's scribbles en frutsels</h1>

      {/* --- Filterknoppen --- */}
      <div className="filters" style={{ marginBottom: "1rem" }}>
        <button onClick={() => setSelectedTag(null)}>Alle</button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{
              marginLeft: "0.5rem",
              background: selectedTag === tag ? "#333" : "#ccc",
              color: selectedTag === tag ? "white" : "black",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* --- Gallery --- */}
      <div className="gallery">
        {filteredArtworks.map((a) => (
          <div
            key={a.id}
            className="image-card"
            onClick={() => setActiveArtwork(a)}
          >
            <img src={a.imageUrl} alt={a.title} />
            <div className="overlay">
              <span>{a.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- Modal / Popup --- */}
      {activeArtwork && (
        <div
          className="modal"
          onClick={() => setActiveArtwork(null)} // klik buiten sluit
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // voorkom sluiten bij klik op afbeelding zelf
            style={{ position: "relative" }}
          >
            <button
              onClick={() => setActiveArtwork(null)}
              style={{
                position: "absolute",
                top: "-2rem",
                right: "-2rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>
            <img
              src={activeArtwork.imageUrl}
              alt={activeArtwork.title}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "8px",
              }}
            />
            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              {activeArtwork.title} – {activeArtwork.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
