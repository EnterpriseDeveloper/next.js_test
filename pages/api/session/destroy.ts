import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from '../../../helpers/wallet/session';
 
function destorySessionRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.json(null);
}
 
export default withIronSessionApiRoute(destorySessionRoute, sessionOptions);