const db = require('../../database');

class CategoriesRepository {
    async findAll() {
        const rows = await db.query(`SELECT * FROM categories ORDER BY name`);
        return rows;
    }

    async findById(id) {
        const [row] = await db.query(`SELECT * FROM categories WHERE id = $1`, [id]);
        return row;
    }

    async findByName(name) {
        const [row] = await db.query(`SELECT * FROM categories WHERE name = $1`, [name]);
        return row;
    }

    async create(body) {
        const [row] = await db.query(`
            INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *
            `, [body.name]);
        return row;
    }

    async update(id, body) {
        const [row] = await db.query(`
        UPDATE categories
        SET name = $1
        WHERE id = $2`,
            [body.name, id]);
        return row;
    }

    async delete(id) {
        const row = await db.query(`DELETE FROM categories WHERE id = $1`, [id]);
        return row;
    }
}

module.exports = new CategoriesRepository();