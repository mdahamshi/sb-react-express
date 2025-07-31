import React from "react";
import { fetchData } from "../api/fetch";
import { useLoaderData } from 'react-router-dom';

export async function loader({ request }) {
  const data = await fetchData({ limit: 12 });
  return { data };
}

export default function Home() {
  const { data } = useLoaderData();
  const users = data.users;
  return (
    <>
      <div>Hello World</div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.username}</h2>
              <p>{user.id}</p>
            </li>
          ))}
        </ul>
    </>
  );
}
