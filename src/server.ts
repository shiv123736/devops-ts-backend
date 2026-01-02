import app from './app';

const PORT: number = 5000; // changed by me

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});