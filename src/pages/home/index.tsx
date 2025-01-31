import { createSignal, onMount, For } from "solid-js";
interface TUser {
  id: number;
  username: string;
}

const Home = () => {
  const [users, setUsers] = createSignal<TUser[]>([]);
  const [loading, setLoading] = createSignal<boolean>(true);
  const [error, setError] = createSignal<string | null>(null);

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data: { users: TUser[] } = await response.json();
      setUsers(data?.users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <h1>Users</h1>
      {loading() && <p>Loading...</p>}
      {error() && <p style={{ color: 'red' }}>Error: {error()}</p>}
      <ul>
        <For each={users()}>
        {(user) => (
            <li>
              <h2>{user.username}</h2>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default Home;