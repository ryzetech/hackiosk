/**
 * Imports
 */
import pkg from 'express';
const { Request, Response } = pkg;
import { PrismaClient } from '@prisma/client';

/**
 * Route
 * @param {Request} req
 * @param {Response} res
 */
export default async (req, res) => {
  const prisma = new PrismaClient();

  const body = req.body;

  const users = await prisma.product.findMany({
    where: body,
  });

  res.json({ error: false, products: users });
};