import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  /* const data = req.body;
* const id = await createItem(data); */
  console.log('req.method', req.method);

  res.status(200).json({ id: 'spootydd' });
}
