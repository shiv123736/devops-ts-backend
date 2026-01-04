import express, { Application, Request, Response } from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';

const app: Application = express();
const x: number = "this is not a number";
// Middleware to parse JSON bodies (formerly body-parser)
app.use(express.json());

app.use('/api', homeRoutes);
app.use('/api', userRoutes);

// Default route
app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Hello from Express + TypeScript!' });
});

export default app;