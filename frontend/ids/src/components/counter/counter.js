import { useEffect, useState } from "react";

export default function HeuristicDisplay() {
  const [config, setConfig] = useState({
    threshold: "",
    time_window: "",
    cooldown: "",
    interface: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchConfig = async () => {
    try {
      const res = await fetch("http://localhost:5001/heuristic");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setConfig({
        threshold: data.threshold,
        time_window: data.time_window,
        cooldown: data.cooldown,
        interface: data.interface,
      });
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch heuristic config:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5001/heuristic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      const data = await res.json();
      setMessage(res.ok ? "Configuration updated!" : `Error: ${data.message}`);
    } catch (err) {
      console.error(err);
      setMessage("Failed to update configuration.");
    }
  };

  if (loading) return <p>Loading heuristic config...</p>;

  return (
    <div className="container mt-3">
      <h5 className="mb-2">Set the Parameters</h5>
      {message && <div className="alert alert-info py-1">{message}</div>}
      <form onSubmit={handleSubmit} className="d-flex flex-wrap align-items-end gap-2">
        <div>
          <label className="form-label small mb-0">Threshold</label>
          <input
            type="number"
            className="form-control form-control-sm"
            name="threshold"
            value={config.threshold}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label small mb-0">Time Window</label>
          <input
            type="number"
            className="form-control form-control-sm"
            name="time_window"
            value={config.time_window}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label small mb-0">Cooldown</label>
          <input
            type="number"
            className="form-control form-control-sm"
            name="cooldown"
            value={config.cooldown}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="form-label small mb-0">Interface</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="interface"
            value={config.interface}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Save</button>
      </form>
    </div>
  );
}
