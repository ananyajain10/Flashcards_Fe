import {useState} from 'react'

const Flashcard = ({question, answer}) => {
    const [isFlipped, setIsFlipped] = useState(false)
  return (
    
        <div
      className="w-64 h-40 bg-white shadow-lg rounded-lg cursor-pointer hover:bg"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        <p className="text-center">{isFlipped ? answer : question}</p>
      </div>
    </div>

    
  )
}

export default Flashcard

