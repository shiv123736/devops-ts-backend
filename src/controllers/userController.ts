import {Request, Response} from 'express';

export const getUsers = (_req: Request, res: Response) => {
    res.json({
        users: [
            { id: 1, name: 'Shivam' },
            { id: 2, name: 'Surekha' }
        ]
    });
};