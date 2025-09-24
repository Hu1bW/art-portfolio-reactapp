
export interface Artwork {
  id: number;
  title: string;    
  date: string;     
  imageUrl: string; 
  tags: string[];   
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Skelet tekening",
    date: "2023",
    imageUrl: "../src/assets/Images/skelly.JPG",
    tags: ["inkt", "fantasy"]
  },
  {
    id: 2,
    title: "Flail tekening",
    date: "2023",
    imageUrl: "../src/assets/Images/flail.JPG",
    tags: ["fantasy", "inkt"]
  },
    {
    id: 3,
    title: "Pad illustratie",
    date: "2023",
    imageUrl: "../src/assets/Images/Frog_illustration.png",
    tags: ["fantasy", "inkt"]
  },
    {
    id: 4,
    title: "Uil illustratie",
    date: "2023",
    imageUrl: "../src/assets/Images/OWL_illustration.png",
    tags: ["fantasy", "inkt"]
  }
  ,
    {
    id: 5,
    title: "Hakmes tekening",
    date: "2023",
    imageUrl: "../src/assets/Images/haknes.JPG",
    tags: ["fantasy", "inkt"]
  }
    ,
    {
    id: 6,
    title: "Goblin tekening",
    date: "2020",
    imageUrl: "../src/assets/Images/Goblin.PNG",
    tags: ["fantasy", "digitaal", "schets"]
  }
    ,
    {
    id: 7,
    title: "Portret studie",
    date: "2022",
    imageUrl: "../src/assets/Images/portraitStudie.png",
    tags: ["studie", "portret", "digitaal"]
  }
    ,
    {
    id: 8,
    title: "Fantasy soldaat",
    date: "2023",
    imageUrl: "../src/assets/Images/gasMaskerSoldaat.png",
    tags: ["fantasy", "digitaal"]
  }
];