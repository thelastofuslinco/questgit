import React from 'react';

export default function Repository({ repository }) {
  return (
    <a className="repoLink" href={`${repository.html_url}`} target="blank">
      <div className="border rounded my-4 p-2">
        <p>{repository.name}</p>
        <p>{repository.description}</p>
        <div className="d-flex justify-content-between">
          {repository.language && <p>{repository.language}</p>}
          <p>
            {new Date(repository.updated_at).toLocaleString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </a>
  );
}
