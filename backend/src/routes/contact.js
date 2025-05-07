import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact received:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message reçu !' });
});

export default router;
