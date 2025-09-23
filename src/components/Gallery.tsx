import { artworks } from "../Data/artworks";

export function Gallery() {
  return (
    <div className="gallery">
      {artworks.map((a) => (
        <div key={a.id} className="cursor-pointer">
          <img src={a.imageUrl} alt={a.title} />
          <h3>{a.title}</h3>
          <p>{a.date}</p>
        </div>
      ))}
    </div>
  );
}
