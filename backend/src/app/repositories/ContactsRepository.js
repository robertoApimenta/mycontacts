const { resolve } = require('path');
const { v4 } = require('uuid');

let contacts =
    [
        {
            id: v4(),
            name: 'Roberto Pimenta',
            email: 'roberto@email.com',
            phone: '(99) 99999-9999',
            category_id: v4(),
        },
        {
            id: v4(),
            name: 'Rodrigo Pimenta',
            email: 'rodrigo@email.com',
            phone: '(99) 99999-8888',
            category_id: v4(),
        },
    ]

class ContactsRepository {
    findAll() {
        return new Promise((resolve, _reject) => { resolve(contacts) });
    }

    findById(id) {
        return new Promise((resolve, _reject) => { resolve(contacts.find((con) => con.id === id)) });
    }

    findByEmail(email) {
        return new Promise((resolve, _reject) => { resolve(contacts.find((con) => con.email === email)) });
    }

    create(body) {
        return new Promise((resolve, _reject) => {
            const newContact = {
                id: v4(),
                name: body.name,
                email: body.email,
                phone: body.phone,
                category_id: body.category_id
            }
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, body) {
        return new Promise((resolve, _reject) => {
            const updatedContact = {
                id,
                name: body.name,
                email: body.email,
                phone: body.phone,
                category_id: body.category_id
            }

            contacts = contacts.map((elem) => (
                elem.id === id ? updatedContact : elem
            ));

            resolve(updatedContact);
        });
    }

    delete(id) {
        return new Promise((resolve, _reject) => {
            contacts = contacts.filter((elem) => elem.id != id);
            resolve();
        });
    }
}

module.exports = new ContactsRepository();