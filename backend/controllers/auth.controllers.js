import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ msg: "User already exist" });
  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashPassword });
  res.json({ mssg: "new user has created" });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  //check with savedb if exist
  try {
    const user = await User.findOne({ email });
    //if exist
    if (!user) {
      return res.status(400).json({ mssg: "no user found" });
    }
    // 2. compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ mssg: "password is not correct" });

    //3. Create jwt token
    const payload = {
      userId: user._id,
      username: user.name,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 1000,
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
