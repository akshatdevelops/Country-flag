

import React, { useState } from 'react';
import Notes from './Notes';
import { Link } from 'react-router-dom';

const determinePosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
    };
};



const Parentnotes = () => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "I am note1",
            position: determinePosition()
        },
        {
            id: 2,
            text: "I am note2",
            position: determinePosition()
        }
    ]);
    const [newNoteText, setNewNoteText] = useState('');

    const handleInputChange = (e) => {
        setNewNoteText(e.target.value);
    };

    const handleAddNote = () => {
        if (newNoteText.trim() !== '') {
            const newNote = {
                id: notes.length + 1,
                text: newNoteText,
                position: determinePosition()
            };
            const updatedNotes = [...notes, newNote];
            setNotes(updatedNotes);
            setNewNoteText('');
        }
    };

    return (
        
        <div>
            <div>
            <Link
                to="/"
                className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
              >
                &larr; Back
              </Link>
            </div>


            <input
                type="text"
                value={newNoteText}
                onChange={handleInputChange}
                placeholder="Give your feedback"
            />
            <button onClick={handleAddNote}>Add feedback</button>
            <Notes notes={notes} setnotes={setNotes} />
        </div>
    );
}

export default Parentnotes

