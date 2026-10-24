import db from '../config/database.js';

const User = {
  async createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`;
    await db.query(sql);
  },

//   async findByEmail(email) {
//     const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
//     return rows[0];
//   },

  async create({ first_name, last_name, email, phone, password }) {
    const [result] = await db.execute(
      'INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone, password]
    );
    return result.insertId;
  },
};

export default User;