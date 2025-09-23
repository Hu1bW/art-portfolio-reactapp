
export interface Artwork {
  id: number;
  title: string;    // naam van de tekening
  date: string;     // datum, bijvoorbeeld "2024-05-12"
  imageUrl: string; // pad naar de afbeelding
  tags: string[];   // bijvoorbeeld ["inkt", "fantasy"]
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Skelet tekening",
    date: "2024-05-12",
    imageUrl: "../src/assets/Images/skelly.JPG",
    tags: ["inkt", "fantasie"]
  },
  {
    id: 2,
    title: "Flail tekening",
    date: "2024-07-03",
    imageUrl: "../src/assets/Images/flail.JPG",
    tags: ["fantasy", "inkt"]
  },
    {
    id: 3,
    title: "Pad illustratie",
    date: "2024-07-03",
    imageUrl: "../src/assets/Images/Frog_illustration.png",
    tags: ["fantasie", "inkt"]
  },
    {
    id: 4,
    title: "Uil illustratie",
    date: "2024-07-03",
    imageUrl: "../src/assets/Images/OWL_illustration.png",
    tags: ["fantasie", "inkt"]
  }
  ,
    {
    id: 5,
    title: "Hakmes tekening",
    date: "2024-07-03",
    imageUrl: "../src/assets/Images/haknes.JPG",
    tags: ["fantasie", "inkt"]
  }
];