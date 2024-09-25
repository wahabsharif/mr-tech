import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import { dbConnect } from "@/lib/dbConnection";
import bcrypt from "bcryptjs"; // Import bcrypt

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { id } = req.query;

  switch (req.method) {
    // GET user by ID
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(user);
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Error fetching user", details: error });
      }

    // UPDATE user by ID
    case "PUT":
      try {
        const { fullName, username, password, active } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updatedUser = await User.findByIdAndUpdate(
          id,
          {
            fullName,
            username,
            password: hashedPassword,
            active,
          },
          { new: true }
        );
        if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(updatedUser);
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Error updating user", details: error });
      }

    // DELETE user by ID
    case "DELETE":
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        return res
          .status(500)
          .json({ error: "Error deleting user", details: error });
      }

    // Handle unsupported HTTP methods
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
