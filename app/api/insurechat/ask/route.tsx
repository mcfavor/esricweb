import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      // Replace with your OpenAI API Key and your custom model (ERICA)
      const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "ERICA", // Use your custom GPT model name
          messages: [
            { role: "system", content: "You are ERICA, an insurance expert specialized in answering insurance-related questions." },
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      res.status(200).json({ reply });
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      res.status(500).json({ error: 'Error fetching response from ERICA.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
