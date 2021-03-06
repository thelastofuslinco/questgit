import React from 'react';

export default function Button({ text, onClick, className }) {
  return (
    <button type="button" className={`${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
