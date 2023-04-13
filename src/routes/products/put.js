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
    ean: new DetailedValue(String, { required: true, min: 8, max: 13 }),
    name: new DetailedValue(String, { required: true, min: 3, max: 255 }),
    price: new DetailedValue(Number, { required: true }),
    active: new DetailedValue(Boolean, { required: true }),
  }

  if (!isValidEAN(body.ean)) {
    return res.status(400).json({ error: true, message: 'Invalid EAN' });
  }

  if (!(new Validator(req.body, model))) {
    return res.status(400).json({ error: true, message: 'Invalid data' });
  }

  try {
    const created = await prisma.product.create({
      data: req.body,
    });
    return res.json({ error: false, message: 'Product created', data: created })
  }
  catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};

function isValidEAN(code) {
  if (!/^\d{8}(\d{4})?$/.test(code)) {
    // EAN-8 and EAN-13 codes must have 8 or 13 digits
    return false;
  }

  var digits = code.split('').map(Number);

  if (code.length === 8) {
    // Calculate EAN-8 check digit
    var sum = (3 * digits[0]) + (1 * digits[1]) + (3 * digits[2]) + (1 * digits[3]) + (3 * digits[4]) + (1 * digits[5]) + (3 * digits[6]);
    var check = (10 - (sum % 10)) % 10;

    return digits[7] === check;
  } else {
    // Calculate EAN-13 check digit
    var sum = (1 * digits[0]) + (3 * digits[1]) + (1 * digits[2]) + (3 * digits[3]) + (1 * digits[4]) + (3 * digits[5]) + (1 * digits[6]) + (3 * digits[7]) + (1 * digits[8]) + (3 * digits[9]) + (1 * digits[10]) + (3 * digits[11]);
    var check = (10 - (sum % 10)) % 10;

    return digits[12] === check;
  }
}
