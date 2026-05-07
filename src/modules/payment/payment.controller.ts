import { NextFunction, Request, Response } from 'express';
import * as paymentService from './payment.service';

export async function getPayments(req: Request, res: Response, next: NextFunction) {
  try {
    const list = await paymentService.getAllPayments();
    res.json(list);
  } catch (error) {
    next(error);
  }
}

export async function createPayment(req: Request, res: Response, next: NextFunction) {
  try {
    const payment = await paymentService.createPayment({
      bookingId: req.body.bookingId,
      amount: Number(req.body.amount),
      currency: req.body.currency ?? 'INR',
      status: req.body.status ?? 'success',
      method: req.body.method ?? 'card',
    });

    res.status(201).json(payment);
  } catch (error) {
    next(error);
  }
}
