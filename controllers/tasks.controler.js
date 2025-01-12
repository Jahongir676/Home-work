import pool from "../config/db.js";

export const GetAllTasks = async (req, res) =>{
    const {boardId} = req.params;
    try {
        const result = await pool.query("SELECT * FROM taks WHERE board_id = $1", [boardId]);
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const GetTaskById = async (req, res) =>{
    const {boardId, taskId} = req.params;
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE board_id = $1 AND id = $2", [boardId, taskId]);
        if(result.rows.length === 0) {
            return res.status(404).json({error: "task not found"});
        };
        res.json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const CreateTask = async (req, res) =>{
    const {boardId} = req.params;
    const { title, order, description, userId, columnId } = req.body;
    try {
        const result = await pool.query(
          "INSERT INTO tasks (title, order, description, board_id, user_id, column_id) VALUES ($1, $2, %3, %4, $5, $6) RETURNING *",
          [title,order,description,userId, columnId]
    );
    res.json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const UpdateTask = async (req, res) => {
    const { boardId, taskId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    try {
      const result = await pool.query(
        'UPDATE Tasks SET title = $1, "order" = $2, description = $3, userId = $4, columnId = $5 WHERE id = $6 AND boardId = $7 RETURNING *',
        [title, order, description, userId, columnId, taskId, boardId]
      );
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
export const DeleteTask = async (req, res) => {
  const { boardId, taskId } = req.params;
  try {
    await pool.query('DELETE FROM Tasks WHERE id = $1 AND boardId = $2', [taskId, boardId]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};