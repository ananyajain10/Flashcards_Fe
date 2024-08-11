import React, { useState } from 'react';
import Flashcard from './Flashcard';
import { ArrowLeftFromLine, ArrowRightToLine } from 'lucide-react';

function FlashcardList({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= flashcards.length ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Flashcard  {...flashcards[currentIndex]} />
      <div className="mt-4">
        <button onClick={prevCard} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded mr-2 hover:bg-blue-500"> <ArrowLeftFromLine /></button>
        <button onClick={nextCard} className="px-4 py-2 bg-gradient-to-r to-cyan-500 from-blue-500 text-white rounded hover:bg-cyan-500">    <ArrowRightToLine /></button>
      </div>
    </div>
  );
}

export default FlashcardList;