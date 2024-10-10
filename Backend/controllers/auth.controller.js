import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    user,
    message: "User created successfully",
  });
  res.send("signup route called");
};

export const login = async (req, res) => {
  res.send("login route called");
};
export const logout = async (req, res) => {
  res.send("logout route called");
};
