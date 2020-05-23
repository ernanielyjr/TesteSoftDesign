import express, { Router } from 'express';

import livrosController from '../controllers/livrosController';

class LivroRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', livrosController.list);
        this.router.get('/:id', livrosController.getOne);
        this.router.post('/', livrosController.create);
        this.router.put('/:id', livrosController.update);
        this.router.delete('/:id', livrosController.delete);
    }

}

export default new LivroRoutes().router;

