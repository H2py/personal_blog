import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="greeting-card">
      <h3>{greeting}! Thanks for stopping by.</h3>
      <button type="button" onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
