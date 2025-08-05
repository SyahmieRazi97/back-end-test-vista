import { Request, Response } from "express";
import prisma from "../prisma/client";

export const createCompany = async (req: Request, res: Response) => {
  try {
    const { name, registrationNumber } = req.body;
    const company = await prisma.company.create({
      data: { name, registrationNumber },
    });
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: "Failed to create company" });
  }
};

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await prisma.company.findMany({
      include: { services: true },
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};