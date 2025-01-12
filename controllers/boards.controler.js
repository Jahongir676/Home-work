import pool from "../config/db.js";

export const GetAllBoards = async (req, res) =>{
    try {
        const result = await pool.query("SELECT * FROM boards");
        res.status(200).json(result.rows);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const GetBoardById = async (req, res) =>{
    const {boardId} = req.params;
    try{
        const result = await pool.query("SELECT * FROM boards WHERE id = $1", [boardId]);
        if(result.rows.length === 0) {
            return res.status(404).json({error: "Board not found"});
        };
        res.status(200).json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const CreateBoard = async (req, res) =>{
    const { title, columns } = req.body;
    try{
        const result = await pool.query("INSERT INTO boards (title, columns) VALUES ($1, $2) RETURNING *", 
        [title, JSON.stringify(columns)]);
        res.status(201).json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const UpdateBoard = async (req, res) =>{
    const {boardId} = req.params;
    const {title, columns} = req.body;
    try {
        const result = await pool.query(
            "UPDATE boards SET title = $1, columns = $2 WHERE id = $3 RETURNING *",
            [title, JSON.stringify(columns), boardId]
        );
        res.status(200).json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const DeleteBoard = async (req, res) =>{
    const {boardId} = req.params;
    try {
        await pool.query("DELETE FROM tasks WHERE board_id = $1", [boardId]);
        await pool.query("DELETE FROM boards WHERE id = $1", [boardId]);
        res.status(204).send("Successfuly Deleted");
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};