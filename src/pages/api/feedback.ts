import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackBody {
  Payment: string | string[];
  Status: string | string[];
  MerchantOrder: string | string[];
}

const handler = (req: NextApiRequest, res: NextApiResponse<FeedbackBody>) => {
  const data: any = {
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  };
  res.status(200).json(data);
};

export default handler;