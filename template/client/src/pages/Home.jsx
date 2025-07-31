import React from 'react';
import { fetchData } from '../api/fetch';
import { useLoaderData } from 'react-router-dom';
import Grid from '../components/Grid';
import GridLinkCard from '../components/GridLinkCard';
/**
 * Loader function to fetch user data from the Express backend.
 * The backend server address is stored in the client `.env` file
 * under the variable: VITE_API_SERVER.
 */
export async function loader({ request }) {
  const server = import.meta.env.VITE_API_SERVER;
  const data = await fetchData({ server, endpoint: 'users', limit: 12 });
  return { data };
}

export default function Home() {
  const { data } = useLoaderData();
  const users = data.users;

  return (
    <main className="home">
      <h1>
        Welcome to the{' '}
        <a href="https://sarawebs.com" target="_blank" rel="noopener">
          SaraWebs
        </a>{' '}
        React + Express starter kit
      </h1>
      <p>
        This data is loaded from an Express.js server connected to a real
        database. Configuration details such as the server URL and database
        connection settings are managed securely using <code>.env</code> files
        on both the client and server sides.
      </p>

      <section className="user-list">
        <h2>Users List (from DB)</h2>
        <Grid>
          {users.map((user) => (
            <GridLinkCard link={`users/${user.id}`}>
              <div key={user.id}>
                <h3>{user.username}</h3>
                <p>User ID: {user.id}</p>
              </div>
            </GridLinkCard>
          ))}
        </Grid>

        <ul></ul>
      </section>
      <section>
        <h2>
          Visit{' '}
          <a
            aria-label="Git Repo"
            href="https://github.com/mdahamshi/sb-react-express#readme"
          >
            Git Repo
          </a>{' '}
          for more information
        </h2>
      </section>
    </main>
  );
}
