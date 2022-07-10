import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

const accessToken = "TEST-6333471751745298-070807-6dfbcdf3bdbbf2ef09f39f827e847654-294413052";

mercadopago.configurations.setAccessToken(accessToken);

type Data = {
  url: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: req.body.title,
          unit_price: 100,
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: `${req.headers.origin}/api/feedback`,
        failure: `${req.headers.origin}/api/feedback`,
        pending: `${req.headers.origin}/api/feedback`,
      },
      auto_return: 'approved',
    };
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ url: response.body.init_point });
  } catch (error) {
    console.log(error);
  }
};

export default handler;