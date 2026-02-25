import { useEffect, useState } from "react";

export function App() {
  const [health, setHealth] = useState<string>("checking...");

  useEffect(() => {
    fetch("/api/v1/health")
      .then((res) => res.json())
      .then((data) => setHealth(data.status))
      .catch(() => setHealth("unreachable"));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <h1>Mealodic</h1>
      <p>Meal planning for individuals and families.</p>
      <p>
        API status: <code>{health}</code>
      </p>
    </main>
  );
}
