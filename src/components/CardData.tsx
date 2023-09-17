interface Card {
    id: number;
    name: string;
    cost: number;
    imageSrc: string;
  }
  
  const cardData: Card[] = [
    {
      id: 1,
      name: "Card 1",
      cost: 9.99,
      imageSrc: "/images/Luffy Phone.jpg",
    },
    {
      id: 2,
      name: "Card 2",
      cost: 19.99,
      imageSrc: "images/luffy phone 2.jpg",
    },
    {
      id: 3,
      name: "Card 3",
      cost: 14.99,
      imageSrc: "card3.jpg",
    },
    // Add more cards as needed
  ];
  
  export default cardData;
  