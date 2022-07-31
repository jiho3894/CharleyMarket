import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Charley",
      ...payload,
    },
    update: {},
  });
  console.log(user);
  return res.status(200).end();
};

export default withHandler("POST", handler);
