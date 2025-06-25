import { useState } from 'react';
import Layout from '../components/Layout';

export default function Sloganizer() {
  const [topic, setTopic] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);
    setSlogans([]);
    const res = await fetch('/api/sloganize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    });
    const data = await res.json();
    setSlogans(data.slogans || []);
    setLoading(false);
  }

  return (
    <Layout>
      <section id="slogan-generator">
        <div className="container">
          <h2 className="section-title">Spark Your Creativity</h2>
          <p className="section-subtitle">Need a catchy slogan? Enter a topic and let our AI-powered tool generate some ideas for you!</p>
          <div className="slogan-input-group">
            <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g., coffee shop, fitness app..." id="slogan-topic-input" />
            <button id="generate-slogan-btn" className="cta-button cta-primary" onClick={generate} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Slogans'}
            </button>
          </div>
          <div id="slogan-results-container" className="slogan-results-grid">
            {slogans.map((s, i) => (
              <div key={i} className="slogan-card">{s}</div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
