import express, { Application, Request, Response } from 'express';
import homeRoutes from './routes/homeRoutes';

const app: Application = express();

// Middleware to parse JSON bodies (formerly body-parser)
app.use(express.json());

app.use('/api', homeRoutes);
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Hello from Express + TypeScript!' });
});

export default app;