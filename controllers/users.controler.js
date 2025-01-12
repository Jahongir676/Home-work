import pool from "../config/db.js"; 

export const GetAllUsers = async (req, res) =>{
    try {
        const result = await pool.query(" SELECT * FROM users");
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const GetUserById = async (req, res) =>{
    try {
        const result = await pool.query(" SELECT * FROM users WHERE id = $1", [req.params.id]);
        if(result.rows.length === 0){
            res.status(404).json({error: "User not found"});
        };
        res.json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

export const UpdateUser = async (req, res) =>{
    try {
        const {userId} = req.params.id;
        const {name, email} = req.body;
        const result = await pool.query("UPDATE users SET name = $1, email = $2, WHERE id = $3 RETURNING id, name, email",
        [name, email, userId]
    );
    res.json(result.rows[0]);
    } catch(error) {
        res.status(500).json({error:message});
    }
};

export const DeleteUser = async (req, res) =>{
    const {userId} = req.params.id;
    try {
        await pool.query("DELETE FROM users WHERE id = $1", [userId]);
        await pool.query("UPDATE tasks SET user_id = NULL WHERE user_id = $1", [userId]);
        res.status(204).send("User succesfuly deleted");
    } catch(error) {
        res.status(500).json({error:message});
    }
};