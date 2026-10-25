import { useEffect, useState } from "react";

// Calls /api/visit, which exists when the site is served through CloudFront.
// On any other host (Vercel, local dev) the call fails and nothing is rendered.
export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/visit", { method: "POST", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  if (count === null) return null;
  return <p className="text-sm opacity-70">Visitor #{count.toLocaleString()}</p>;
}
