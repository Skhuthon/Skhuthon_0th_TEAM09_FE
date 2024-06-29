import type { NextApiRequest, NextApiResponse } from 'next';

const categories = [
  { id: 1, name: '인문' },
  { id: 2, name: '경영' },
  { id: 3, name: '사회' },
  { id: 4, name: '미콘' },
  { id: 5, name: '미래' },
  { id: 6, name: '소프' },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
