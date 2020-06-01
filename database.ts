import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

export interface Dino {
  name: string;
  era: string;
  diet: string;
  regions: string;
  feetTall: number;
  feetLong: number;
  pounds: number;
}

export const getAllDinos = async (): Promise<any> => {
  const client = new MongoClient();
  client.connectWithUri("mongodb://localhost:27017");

  const db = client.database("dinosaurs");
  const dinos = db.collection("dinos");

  return await dinos.find();
};

export async function getDinoById(id: string): Promise<any> {
  const client = new MongoClient();
  client.connectWithUri("mongodb://localhost:27017");

  const db = client.database("dinosaurs");
  const dinosCollection = db.collection("dinos");

  return await dinosCollection.findOne({ _id: id });
}

export const createDino = async (dino: Dino): Promise<any> => {
  const client = new MongoClient();
  client.connectWithUri("mongodb://localhost:27017");

  const db = client.database("dinosaurs");
  const dinos = db.collection("dinos");

  return await dinos.insertOne(dino);
};
