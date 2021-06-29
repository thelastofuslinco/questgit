import React from 'react';

export default function HasRepository({ repository, isRepository }) {
  return (
    <div>
      {isRepository ? (
        repository.length ? null : (
          <p>Sem repositório disponível</p>
        )
      ) : null}
    </div>
  );
}
