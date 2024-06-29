import type { NextApiRequest, NextApiResponse } from 'next';

const categorization = [
  { id: 1, name: '백엔드 개발' },
  { id: 2, name: '프론트엔드 개발' },
  { id: 3, name: '노트북' },
  { id: 4, name: '카메라' },
  { id: 5, name: '핸드폰' },
  { id: 6, name: '애플' },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categorization);
}
