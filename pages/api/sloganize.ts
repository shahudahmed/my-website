import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { topic } = req.body as { topic?: string };
  if (!topic) {
    res.status(400).json({ error: 'Topic required' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const prompt = `Generate 3 short, catchy marketing slogans for a business related to "${topic}". Return the response as a JSON array of strings.`;

  const payload = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: { type: 'ARRAY', items: { type: 'STRING' } }
    }
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`API error ${response.status}`);

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
    const slogans = text ? JSON.parse(text) : [];
    res.status(200).json({ slogans });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate slogans' });
  }
}
