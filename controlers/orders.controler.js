import pool  from '../database/db.js'

export const getAllOrders = async (req, res) => {
    const { limit = 10, offset = 0, user_location } = req.query;
    let query = 'SELECT * FROM "Orders" WHERE 1=1';
    const values = [];
  
    if (user_location) {
      values.push(user_location);
      query += ` AND "user_location" ILIKE $${values.length}`;
    }
  
    query += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);
  
    try {
      const result = await pool.query(query, values);
      res.status(200).json({ orders: result.rows });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching orders', error: err.message });
    }
  };

export const getOrderById = (req,res,next) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM "Orders" WHERE order_id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

export const createOrder = (req,res,next) => {
    const {order_id, is_reseved} = req.body;
    pool.query('INSERT INTO "Orders" (order_id, is_resevied) VALUES ($1, $2)', [order_id, is_reseved], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Order added with ID: ${order_id}`);
    });
};

export const updateOrder = (req,res,next) => {
    const {order_id, is_reseved} = req.body;
    pool.query('UPDATE "Orders" SET is_reseved = $1 WHERE order_id = $2', [is_reseved, order_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Order modified with ID: ${order_id}`);
    });
};

export const deleteOrder = (req,res,next) => {
    const order_id = parseInt(req.params.order_id);
    pool.query('DELETE FROM "Orders" WHERE order_id = $1', [order_id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Order deleted with ID: ${order_id}`);
    });
};