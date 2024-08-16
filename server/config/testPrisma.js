const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('Attempting to connect to the database...');
    await prisma.$connect();
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed', error);
  } finally {
    console.log('Disconnecting from the database...');
    await prisma.$disconnect();
    console.log('Disconnected from the database');
  }
}

testConnection();