import { useCallback, useMemo, useState } from 'preact/hooks';

export default function Greeting({ messages = [] }) {
  const safeMessages = useMemo(() => (messages.length > 0 ? messages : ['Hello']), [messages]);
  const [greeting, setGreeting] = useState(safeMessages[0]);

  const randomMessage = useCallback(() => {
    if (safeMessages.length === 1) {
      return safeMessages[0];
    }

    const index = Math.floor(Math.random() * safeMessages.length);
    return safeMessages[index];
  }, [safeMessages]);

  const handleClick = useCallback(() => {
    setGreeting(randomMessage());
  }, [randomMessage]);

  return (
    <div className="greeting-card">
      <h3>{greeting}! Thanks for stopping by.</h3>
      <button type="button" onClick={handleClick}>
        New Greeting
      </button>
    </div>
  );
}
