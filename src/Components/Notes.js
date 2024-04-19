import React, { useEffect, useRef } from 'react';
import Note from './Note';

const Notes = ({ notes, setnotes }) => {
  useEffect(() => {
    const savednotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatednotes = notes.map((note) => {
      const savednote = savednotes.find((n) => n.id === note.id);
      if (savednote) {
        return { ...note, position: savednote.position };
      } else {
        const position = determineposition();
        return { ...note, position };
      }
    });
    setnotes(updatednotes);
    localStorage.setItem('notes', JSON.stringify(updatednotes));
  }, [notes]);

  const noterefs = useRef([]);

  const handleDragDown = (e, note) => {
    const { id } = note;
    const noteref = noterefs.current[id];
    const rect = noteref.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      noteref.style.left = `${newX}px`;
      noteref.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      const finalrect = noteref.getBoundingClientRect();
      const newposition = { x: finalrect.left, y: finalrect.top };
      updateNewPosition(id, newposition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setnotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const updateNewPosition = (id, newposition) => {
    const updatednotes = notes.map((note) =>
      note.id === id ? { ...note, position: newposition } : note
    );
    setnotes(updatednotes);
    localStorage.setItem('notes', JSON.stringify(updatednotes));
  };

  const determineposition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    };
  };

  return (
    <div className="flex flex-wrap">
      {notes.map((note) => (
        <div key={note.id} className="relative w-48 h-48 p-4 m-2 bg-yellow-100">
          <Note
            ref={(element) => (noterefs.current[note.id] = element)}
            initialPosition={note.position}
            content={note.text}
            onMouseDown={(e) => handleDragDown(e, note)}
            onDelete={() => handleDeleteNote(note.id)} // Pass onDelete prop
          />
        </div>
      ))}
    </div>
  );
};

export default Notes;
