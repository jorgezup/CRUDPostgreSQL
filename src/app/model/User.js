/* Onde são feitas as queries no banco de de dados */

const db = require('../../config/db')

module.exports = {
    all() {
        return db.query(`SELECT * FROM users`)
    },
    async create(data) {
        console.log(data)
        try {
            const query = `
            INSERT INTO users(
                name,
                surname,
                sexo
            ) VALUES ($1, $2, $3)
            RETURNING id
            `
            const values = [
                data.name,
                data.surname,
                data.sexo
            ]

            const results = await db.query(query, values)
            return results.rows[0].id

        } catch (error) {
            console.error(error)
        }
    },
    find(id) {
        return db.query(`SELECT * FROM users WHERE id = $1`, [id])
    },
    update(data, id) {
        const query = `
            UPDATE users SET
                name=($1),
                surname=($2),
                sexo=($3)
            WHERE id =$4
        `
        const values = [
            data.name,
            data.surname,
            data.sexo,
            id
        ]
        console.log(values)

        return db.query(query, values)
    },
    delete(id) {
        return db.query(`DELETE FROM users WHERE id = $1`, [id])
    }
}