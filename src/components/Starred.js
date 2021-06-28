import React from 'react';

export default function Starred({ starred }) {
  return (
    <a className="repoLink" href={`${starred.html_url}`} target="blank">
      <div className="border rounded my-4 p-2">
        <p>{starred.name}</p>
        <p>{starred.description}</p>
        <div className="d-flex justify-content-between">
          {starred.language && <p>{starred.language}</p>}
          <p>
            {new Date(starred.updated_at).toLocaleString('pt-BR', {
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
