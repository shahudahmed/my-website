import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== 'POST') return res.status(405).end()
  const {topic} = req.body
  if(!topic) return res.status(400).json({slogans: []})
  // In a real app you'd call an AI API here
  const example = [`Best ${topic} in town!`, `${topic} like never before`, `Experience ${topic} magic`]
  res.status(200).json({slogans: example})
}
