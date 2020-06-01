import { serve } from "https://deno.land/std/http/server.ts";
import {
  getAllDinos,
  createDino,
  Dino,
  getDinoById,
} from "./database.ts";

const server = serve({ port: 8888 });
console.log("Deno 🦕 Running on  http://localhost:8888");

for await (const request of server) {
  if (request.method === "GET") {
    // const data = JSON.stringify({ data: await getAllDinos() });

    // request.respond({
    //   body: data + "\n",
    // });
    const response = {
      body: JSON.stringify({ data: await getAllDinos() }),
    };
    request.respond(response);
  } else {
    const body = new TextDecoder().decode(await Deno.readAll(request.body));
    const data = new URLSearchParams(body);
    const dino: Dino = {
      name: data.get("name") || "",
      era: data.get("era") || "",
      diet: data.get("diet") || "",
      regions: data.get("regions") || "",
      feetTall: parseInt(data.get("feetTall") || "0"),
      feetLong: parseInt(data.get("feetLong") || "0"),
      pounds: parseInt(data.get("pounds") || "0"),
    };
    const { $oid } = await createDino(dino);
    const response = {
      body: JSON.stringify({ data: await getDinoById($oid) }),
    };

    request.respond(response);
  }
}

export {};
