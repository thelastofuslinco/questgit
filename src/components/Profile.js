import React from 'react';

export default function Profile({ user }) {
  return (
    <div>
      <img src={user.avatar_url} height="200px" />
      <p>tagname: {user.login}</p>
      <p>name: {user.name}</p>
      <p>followers: {user.followers}</p>
      <p>following: {user.following}</p>
      <p>public_repos: {user.public_repos}</p>
      <p>location: {user.location}</p>
      <p>bio: {user.bio}</p>
    </div>
  );
}
