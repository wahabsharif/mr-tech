import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import { dbConnect } from "@/lib/dbConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error fetching users", details: error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
