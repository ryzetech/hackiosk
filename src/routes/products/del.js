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
  const ean = body.ean;

  try {
    const deleted = await prisma.product.delete({
      where: {
        ean: ean,
      },
    });
    return res.json({ error: false, message: 'Product deleted', data: deleted })
  }
  catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};