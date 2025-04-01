import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const loginUser = async (username, password) => {
    if (!username || !password) throw new Error('Username and password are required');
    if (typeof username !== 'string' || typeof password !== 'string') throw new Error('Username and password must be strings');
    if (username.length < 3 || password.length < 3) throw new Error('Username and password must be at least 3 characters long');

    const user = await User.findOne({ where: { username } });
    if (!user) throw new Error('This user does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid password');

    return {
        id: user.id,
        username: user.username,
    }
}