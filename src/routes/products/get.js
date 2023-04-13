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
  const activeOnly = body.activeOnly || false;

  const products = await prisma.product.findMany({
    where: {
      active: activeOnly,
    },
  });

  res.json({ error: false, products });
};