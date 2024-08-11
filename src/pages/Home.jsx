import React, { useState, useEffect } from 'react';
import FlashcardList from '../components/FlashcardList';
import { getFlashcards } from '../services/api';

function Home() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const cards = await getFlashcards();
      setFlashcards(cards);
    };
    fetchFlashcards();
  }, []);

  return (
    <div className="container  mx-auto p-4 flex flex-col items-center ">
      <h1 className="text-4xl font-bold mb-4 text-white">Flashcard App</h1>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default Home;
