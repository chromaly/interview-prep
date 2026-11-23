import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setError('');

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: 'Pasted email',
          body: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Could not analyze the invite (${response.status}).`);
      }

      setResult(await response.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not reach the API.');
    }
  }

  return (
   <form onSubmit={handleSubmit}>
    <div>
      <label>
        Paste your testing email content here:
      </label>
      <textarea
        id="email"
        rows={8}
        spellCheck={false}
        required
        value={text}
        onChange={(event) => setText(event.target.value)}
        style={{ display: 'block', width: '100%', resize: 'vertical' }}
        />
         <button type="submit">Submit here</button>
          {error && <p role="alert">{error}</p>}
          {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
   </form>
  )
}

export default App
