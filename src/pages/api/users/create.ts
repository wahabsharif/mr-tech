import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import { dbConnect } from "@/lib/dbConnection";
import bcrypt from "bcryptjs"; // Import bcrypt

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { fullName, username, password, active } = req.body;

      // Hash the password using bcrypt
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        fullName,
        username,
        password: hashedPassword, // Save hashed password
        active,
      });

      const savedUser = await newUser.save();
      return res.status(201).json(savedUser);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Error creating user", details: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
