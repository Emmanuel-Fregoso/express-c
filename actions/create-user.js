import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (username, password) => {
    if (!username || !password) throw new Error('Username and password are required');
    if (typeof username !== 'string' || typeof password !== 'string') throw new Error('Username and password must be strings');
    if (username.length < 3 || password.length < 3) throw new Error('Username and password must be at least 3 characters long');

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) throw new Error('Username already exists');

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ username, password:hashedPassword });
    return newUser.id
}