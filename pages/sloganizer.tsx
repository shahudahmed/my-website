import {useState} from 'react'
import Head from 'next/head'

export default function Sloganizer() {
  const [topic, setTopic] = useState('')
  const [slogans, setSlogans] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  async function handleGenerate() {
    if(!topic) return
    setLoading(true)
    try {
      const res = await fetch('/api/slogan', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({topic})})
      const data = await res.json()
      setSlogans(data.slogans)
    } catch(e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>AI Sloganizer - Big Red Banana</title>
      </Head>
      <section id="slogan-generator">
        <h1>AI Sloganizer</h1>
        <p className="section-subtitle">Need a catchy slogan? Enter a topic and let our AI-powered tool generate ideas!</p>
        <div className="slogan-input-group">
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g., coffee shop" />
          <button onClick={handleGenerate} disabled={loading}>{loading ? 'Generating...' : 'Generate Slogans'}</button>
        </div>
        <div className="slogan-results-grid">
          {slogans.map((s, i) => (<div key={i} className="slogan-card">{s}</div>))}
        </div>
      </section>
    </>
  )
}
