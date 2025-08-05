import { Request, Response } from "express";
import prisma from "../prisma/client";

export const createService = async (req: Request, res: Response) => {
  try {
    const { name, description, price, companyId } = req.body;

    if (!name || !description || !price || !companyId) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const service = await prisma.service.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        companyId: Number(companyId),
      },
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

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch service" });
  }
};
