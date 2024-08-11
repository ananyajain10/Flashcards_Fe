import { useState, useEffect } from 'react';
import { getFlashcards, addFlashcard, updateFlashcard, deleteFlashcard } from '../services/api';
import { DiamondPlus, OctagonX, Pencil } from 'lucide-react';
function AdminDashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [newCard, setNewCard] = useState({ question: '', answer: '' });
  const [editingCardId, setEditingCardId] = useState(null);
  const [editingCard, setEditingCard] = useState({ question: '', answer: '' });

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    const cards = await getFlashcards();
    setFlashcards(cards);
  };

  const handleAddCard = async () => {
    await addFlashcard(newCard);
    setNewCard({ question: '', answer: '' });
    fetchFlashcards();
  };

  const handleEditClick = (card) => {
    setEditingCardId(card.id);
    setEditingCard({ question: card.question, answer: card.answer });
  };

  const handleSaveClick = async () => {
    await updateFlashcard(editingCardId, editingCard);
    setEditingCardId(null);
    fetchFlashcards();
  };

  const handleDeleteCard = async (id) => {
    await deleteFlashcard(id);
    fetchFlashcards();
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-4xl font-bold mb-4">Admin Dashboard</h2>
     
      <div className="mb-4">
        <input
          type="text"
          required
          placeholder="Question"
          value={newCard.question}
          onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
          className="border p-2 rounded mr-2 text-black"
        />
        <input
          type="text"
          required
          placeholder="Answer"
          value={newCard.answer}
          onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
          className="border p-2 rounded mr-2 text-black"
        />
        <button onClick={handleAddCard} className="bg-green-500 text-white px-4 pt-2  pb-4 rounded"> <DiamondPlus /> </button>
      </div>
      
      {flashcards.map((card) => (
        <div key={card.id} className="mb-2 p-2 border">
          {editingCardId === card.id ? (
            <>
              <input
                type="text"
                required
                value={editingCard.question}
                onChange={(e) => setEditingCard({ ...editingCard, question: e.target.value })}
                className="border p-2 mb-2 text-black"
              />
              <input
                type="text"
                required
                value={editingCard.answer}
                onChange={(e) => setEditingCard({ ...editingCard, answer: e.target.value })}
                className="border p-2 mb-2 text-black"
              />
              <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
              <button onClick={() => setEditingCardId(null)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </>
          ) : (
            <>
              <p>Q: {card.question}</p>
              <p>A: {card.answer}</p>
              <button onClick={() => handleEditClick(card)} className="bg-yellow-500 text-white px-2 py-1 rounded mt-2 mr-2"> <Pencil /></button>
              <button onClick={() => handleDeleteCard(card.id)} className="bg-red-500 text-white px-2 py-1 rounded mt-2">  <OctagonX /> </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
