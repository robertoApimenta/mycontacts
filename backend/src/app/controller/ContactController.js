const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
    async index(_req, res) {
        // listar todos os registros de contatos
        const contacts = await ContactsRepository.findAll();
        res.json(contacts);
    }

    async show(req, res) {
        // obter UM registro
        const id = req.params.id;
        const contacts = await ContactsRepository.findById(id);

        if (!contacts) { // not found
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.json(contacts);
    }

    async store(req, res) {
        // new registro
        const body = req.body;
        const contactExists = await ContactsRepository.findByEmail(body.email);
        if (contactExists) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }
        const newContact = await ContactsRepository.create(body);
        res.send(newContact);
    }

    async update(req, res) {
        // atualizar registro
        const id = req.params.id;
        const body = req.body;

        const contactIdExists = await ContactsRepository.findById(id);

        if (!contactIdExists) { // not found
            return res.status(404).json({ message: 'Contact not found' });
        }

        const contactEmailExists = await ContactsRepository.findByEmail(body.email);
        if (contactEmailExists && contactEmailExists.id != id) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        const contactUpdate = await ContactsRepository.update(id, body);

        res.json(contactUpdate);
    }

    async delete(req, res) {
        // deletar registro
        const id = req.params.id;
        const contacts = await ContactsRepository.findById(id);

        if (!contacts) { // not found
            return res.status(404).json({ message: 'Contact not found' });
        }

        await ContactsRepository.delete(id);

        return res.sendStatus(204);
    }
};


// Singleton
module.exports = new ContactController();