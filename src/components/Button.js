import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button type="button" className="btn btn-primary col-5" onClick={onClick}>
      {text}
    </button>
  );
}
