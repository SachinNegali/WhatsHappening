import User from "../models/user";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addUser = async (req, res) => {
    try {
        const { name, displayName, loggedInWith } = req.body;
        const newUserObj = {
            name,
            displayName,
            // loggedInWith,
        }
        const jwtSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
        const token = jwt.sign({ ...userInfo, userType: "user" }, jwtSecret);
    } catch (error) {

    }
}