import { Request, Response } from "express";
import prisma from "../prisma/client";

export const createCompany = async (req: Request, res: Response) => {
  try {
    const { name, registrationNumber } = req.body;

    if (!name || !registrationNumber) {
      return res.status(400).json({ error: "All fields are required" });
    }

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

    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};
