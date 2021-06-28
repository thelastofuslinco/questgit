import React from 'react';

export default function Profile({ user, starreds }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="mb-3">
        <img
          src={user.avatar_url}
          height="200px"
          className="rounded-circle border border-qg-dark"
        />
        <i className="bi bi-laptop profileIcon border border-qg-dark"></i>
      </div>

      <p className="title">{user.name}</p>
      <p className="subTitle">{user.login}</p>

      <div className="">
        <p className="mb-0 ">
          <i className="bi bi-people-fill"></i> {user.followers} followers{' '}
          {user.following} following {starreds.length}{' '}
          <i className="bi bi-star-fill"></i>
        </p>

        {user.company && (
          <p className="mb-0 ">
            <i className="bi bi-building"></i> {user.company}
          </p>
        )}

        {user.location && (
          <p className="mb-0 ">
            <i className="bi bi-geo-alt-fill"></i> {user.location}
          </p>
        )}

        {user.blog && (
          <p className="mb-0 ">
            <i className="bi bi-link-45deg"></i> {user.blog}
          </p>
        )}

        {user.twitter_username && (
          <p className="mb-0 ">
            <i className="bi bi-twitter"></i> {user.twitter_username}
          </p>
        )}

        {user.public_repos && (
          <p className="mb-0 ">
            <i className="bi bi-archive-fill"></i> {user.public_repos}
          </p>
        )}
      </div>
      <p className="m-4 border rounded p-2">{user.bio}</p>
    </div>
  );
}
