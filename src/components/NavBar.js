import React from 'react';
import Button from './Button';
import Input from './Input';

export default function NavBar({ inputValue, setInput, getUserData }) {
  return (
    <nav className="py-3 container">
      <p className="text-center">QuestGit</p>

      <div className="row">
        <Input
          value={inputValue}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && getUserData()}
        />

        <Button onClick={getUserData} text="search" />
      </div>
    </nav>
  );
}
