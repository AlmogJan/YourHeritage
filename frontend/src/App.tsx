import { useState, useEffect } from "react";

export function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/tree")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Hello from frontend</h1>
      <h1>{message}</h1>
    </div>
  );
}