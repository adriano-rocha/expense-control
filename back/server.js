import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import transactionsRoutes from './routes/transactions.js';

const app = express();
const prisma = new PrismaClient();

app.use(cors()); 
app.use(express.json()); 

app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use('/api/transactions', transactionsRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Servidor funcionando!', 
    timestamp: new Date().toISOString() 
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API: http://localhost:${PORT}`);
  console.log(`Teste: http://localhost:${PORT}/api/transactions`);
});

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});