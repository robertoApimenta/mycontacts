const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
    async index(_req, res) {
        // listar todos os registros de contatos
        const categories = await CategoriesRepository.findAll();
        res.json(categories);
    }

    async show(req, res) {
        // obter UM registro
        const id = req.params.id;
        const category = await CategoriesRepository.findById(id);

        if (!category) { // not found
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.json(category);
    }

    async store(req, res) {
        // new registro
        const body = req.body;
        const categoryExists = await CategoriesRepository.findByName(body.name);
        if (categoryExists) {
            return res.status(400).json({ message: 'Categoria já cadastrada' });
        }
        const newCategory = await CategoriesRepository.create(body);
        res.send(newCategory);
    }

    async update(req, res) {
        // atualizar registro
        const id = req.params.id;
        const body = req.body;

        const categoryIdExists = await CategoriesRepository.findById(id);

        if (!categoryIdExists) { // not found
            return res.status(404).json({ message: 'Category not found' });
        }

        const categoryNameExists = await CategoriesRepository.findByName(body.name);
        if (categoryNameExists && categoryNameExists.id != id) {
            return res.status(400).json({ message: 'Name já cadastrado' });
        }

        const categoryUpdate = await CategoriesRepository.update(id, body);

        res.json(categoryUpdate);
    }

    async delete(req, res) {
        // deletar registro
        const id = req.params.id;
        const category = await CategoriesRepository.findById(id);

        if (!category) { // not found
            return res.status(404).json({ message: 'Category not found' });
        }

        await CategoriesRepository.delete(id);

        return res.sendStatus(204);
    }
};


// Singleton
module.exports = new CategoryController();