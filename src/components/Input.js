import React from 'react';

export default function Input({ value, onChange, onKeyDown }) {
  return (
    <div>
      <input value={value} onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  );
}
