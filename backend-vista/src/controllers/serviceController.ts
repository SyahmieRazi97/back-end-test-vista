import { Request, Response } from "express";
import prisma from "../prisma/client";

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, description, price, companyId } = req.body;
    const service = await prisma.service.create({
      data: { name, description, price: parseFloat(price), companyId },
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to create service" });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const service = await prisma.service.findUnique({
      where: { id: Number(id) },
    });
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service" });
  }
};