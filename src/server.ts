import app from './app';

const PORT: number = 8080;

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});