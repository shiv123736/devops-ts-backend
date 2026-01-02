import {Request, Response} from 'express';

export const getUsers = (_req: Request, res: Response) => {
    res.json({
        users: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' }
        ]
    });
};