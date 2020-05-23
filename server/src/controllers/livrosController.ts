import { Request, Response } from 'express';


import pool from '../database';

class LivrosController {

    public async list(req: Request, res: Response): Promise<void> {
        const livros = await pool.query('SELECT * FROM livros');
        res.json(livros);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const livros = await pool.query('SELECT * FROM livros WHERE id = ?', [id]);
        console.log(livros.length);
        if (livros.length > 0) {
            return res.json(livros[0]);
        }
        res.status(404).json({ text: "O livro não existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO livros set ?', [req.body]);
        res.json({ message: 'Livro salvo' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldLivro = req.body;
        await pool.query('UPDATE livros set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Livro modificado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM livros WHERE id = ?', [id]);
        res.json({ message: "Livro deletado" });
    }
}

const livrosController = new LivrosController;
export default livrosController;