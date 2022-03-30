import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { petList } from "./index";

const getPet = (id: string) => petList.find((pet) => pet.id === parseInt(id));

const handler = nc().get((req: NextApiRequest, res: NextApiResponse) => {
  const pet = getPet(req.query.id[0]);
  res.status(200).json(pet);
});

export default handler;
