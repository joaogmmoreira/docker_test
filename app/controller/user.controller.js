const pool = require('../database/config');

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        const user = result.rows[0];

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getUserById,
};