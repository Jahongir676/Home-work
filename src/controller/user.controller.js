import {
  getAllUserService,
  getOneUserService,
  updateUserService,
  deleteUserService,
} from "../services/index.js";

export const userController = {
  AllUsers: (req, res, next) => {
    try {
      const allData = getAllUserService("SELECT * FROM users");
      if (allData.length > 0) {
        res.status(200).send(allData);
        res.status(200).send({ msg: "ok" });
      } else {
        res.status(404).send({ msg: "No Users yet" });
      }
    } catch (error) {
      next(error);
    }
  },
  UserById: (req, res, next) => {
    try {
      const { id } = req.params;
      const oneUser = getOneUserService("SELECT * FROM users WHERE id = $1", id);
      if (oneUser.rowCount === 0) {
        res.status(404).send({ msg: "User not found" });
      }
      res.status(200).send({ msg: "ok", data: oneUser });
    } catch (error) {
      next(error);
    }
  },

  updateUser: (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const updateUser = updateUserService(
        "UPDATE users SET name = $1 WHERE id = $2",
        [name],
        id
      );
      res.status(200).send({ msg: "ok" });
    } catch (error) {
      next(error);
    }
  },

  deleteUser: (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteUser = deleteUserService("DELETE FROM users WHERE id = $1", id);
      if (deleteUser.rowCount === 0) {
        return res.status(404).send({ msg: "User not found" });
      } else {
        res.status(200).send({ msg: "ok", data: "User deleted successfully" });
      }
    } catch (error) {
      next(error);
    }
  },
};