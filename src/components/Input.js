import React from 'react';

export default function Input({ value, onChange, onKeyDown }) {
  return (
    <div className="input-group flex-nowrap col-6">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
