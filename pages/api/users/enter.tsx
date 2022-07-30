import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).end();
};

export default withHandler("POST", handler);
