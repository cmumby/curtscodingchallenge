import express, { Request, Response } from 'express';

const timeline = (res: Response) => {
  res.json({ test: true });
};

export default timeline;
