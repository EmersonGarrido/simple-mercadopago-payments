import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';

const accessToken = "APP_USR-8861077331107253-071300-7ee3515bb9f291bc1e759dbc220a8124-294413052";

mercadopago.configurations.setAccessToken(accessToken);
mercadopago.configurations.sandbox = true;
mercadopago.configurations.show_promise_error = true;

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
    console.log(response.body)
    res.status(200).json({ url: response.body.init_point });
  } catch (error) {
    console.log(error);
  }
};

export default handler;