import React from 'react';
import Button from './Button';
import Input from './Input';

export default function NavBar({ value, setValue, getData }) {
  return (
    <nav className="py-4 container">
      <p className="text-center">QuestGit</p>

      <div className="row justify-content-center">
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && getData()}
        />

        <Button
          onClick={getData}
          text="search"
          className="btn btn-primary col-3"
        />
      </div>
    </nav>
  );
}
