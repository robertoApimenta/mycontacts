const db = require('../../database');

class ContactsRepository {
    async findAll() {
        const rows = await db.query(`
        SELECT contacts.*, categories.name AS category_name
        FROM contacts
        JOIN categories ON categories.id = contacts.category_id
        ORDER BY contacts.name`);
        return rows;
    }

    async findById(id) {
        const [row] = await db.query(`SELECT * FROM contacts WHERE id = $1`, [id]);
        return row;
    }

    async findByEmail(email) {
        const [row] = await db.query(`SELECT * FROM contacts WHERE email = $1`, [email]);
        return row;
    }

    async create(body) {
        const [row] = await db.query(`
            INSERT INTO contacts (name, email, phone, category_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `, [body.name, body.email, body.phone, body.category_id]);
        return row;
    }

    async update(id, body) {
        const [row] = await db.query(`
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5`,
            [body.name, body.email, body.phone, body.category_id, id]);
        return row;
    }

    async delete(id) {
        const row = await db.query(`DELETE FROM contacts WHERE id = $1`, [id]);
        return row;
    }
}

module.exports = new ContactsRepository();