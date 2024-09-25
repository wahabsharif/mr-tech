import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";
import { dbConnect } from "@/lib/dbConnection";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { username, password } = req.body;

    // Validate if the username and password are provided
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      // Find the user by username
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Password matched, return success and the user data (you may return a token here)
      return res.status(200).json({
        message: "Login successful",
        user: {
          fullName: user.fullName,
          username: user.username,
          active: user.active,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: "Login failed", details: error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
