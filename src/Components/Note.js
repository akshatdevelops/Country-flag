import React, { forwardRef } from 'react';

const Note = forwardRef(({ content, initialPosition, onMouseDown, onDelete }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute border border-black p-2 cursor-move bg-yellow-200"
      style={{ left: `${initialPosition?.x}px`, top: `${initialPosition?.y}px` }}
      onMouseDown={onMouseDown}
    >
      <div>{content}</div>
      <button onClick={onDelete} className="mt-2 px-4 py-2 bg-red-500 text-white">Delete</button>
    </div>
  );
});

export default Note;
