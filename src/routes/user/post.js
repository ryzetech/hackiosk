/**
 * Imports
 */
import pkg from 'express';
const { Request, Response } = pkg;
import { PrismaClient } from '@prisma/client';
import { Validator, DetailedValue } from 'node-data-validator';

/**
 * Route
 * @param {Request} req
 * @param {Response} res
 */
export default async (req, res) => {
  const prisma = new PrismaClient();

  const body = req.body;
  
  const model = {
    nick: new DetailedValue(String, { required: true }),
    balance: new DetailedValue(Number, { required: true }),
  }

  if (!(new Validator(req.body, model))) {
    return res.status(400).json({ error: true, message: 'Invalid data' });
  }

  try {
    const created = await prisma.user.create({
      data: req.body,
    });
    return res.json({ error: false, message: 'User created', data: created })
  }
  catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};
