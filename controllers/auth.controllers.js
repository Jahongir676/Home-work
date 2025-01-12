import { createUser, loginUser, logoutUser } from "../services/index.js";

export const registerUserController = async (req, res, next) => {
    try {
        const newUser = req.body;
        const userData = await createUser(newUser);
        res.status(201).send({
            status: "Created",
            data: userData,
        });
    } catch (error) {
        next(error);
    }
};

export const loginUserController = async (req, res, next) => {
    try {
        const result = await loginUser(req.body);
        console.log(result);

        if (result) {
            return res.status(200).send("Login is successfully");
        } else {
            throw new Error("Email or password is incorrect!");
        }
    } catch (error) {
        next(error);
    }
};

export const logoutUserController = async (req, res, next) => {
    try {
        const result = await logoutUser(req.body);

        if (result) {
            return res.status(200).send("Logout is successfully");
        } else {
            throw new Error("Something went wrong!");
        }
    } catch (error) {
        next(error);
    }
};