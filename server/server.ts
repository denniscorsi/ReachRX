import app from './express';
const PORT: number = 3002;

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
