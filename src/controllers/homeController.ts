import { Request, Response } from 'express';

export const getHome = (_req: Request, res: Response) => {
    res.json({
        message: 'Welcome to the Professional API',
        status: 'success',
        timestamp: new Date().toISOString()
    });
};