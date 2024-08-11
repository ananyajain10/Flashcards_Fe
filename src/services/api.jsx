const API_URL = 'http://localhost:3000/api'; 

export const getFlashcards = async () => {
  const response = await fetch(`${API_URL}/flashcards`);
  if (!response.ok) {
    throw new Error('Failed to fetch flashcards');
  }
  return response.json();
};

export const addFlashcard = async (flashcard) => {
  const response = await fetch(`${API_URL}/flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flashcard),
  });
  if (!response.ok) {
    throw new Error('Failed to add flashcard');
  }
  return response.json();
};

export const updateFlashcard = async (id, flashcard) => {
  const response = await fetch(`${API_URL}/flashcards/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(flashcard),
  });
  if (!response.ok) {
    throw new Error('Failed to update flashcard');
  }
  return response.json();
};

export const deleteFlashcard = async (id) => {
  const response = await fetch(`${API_URL}/flashcards/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete flashcard');
  }
  return response.json();
};