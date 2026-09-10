import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
app.listen(port, () => {
    console.log(`Octofit API running on port ${port}`);
});
