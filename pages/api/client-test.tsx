import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.user.create({
    data: {
      email: "charley@hi.com",
      name: "charley",
    },
  });
  res.json({
    ok: true,
  });
};

export default handler;
