import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8888 });
console.log("Deno 🦕 Running on  http://localhost:8888");

for await (const request of server) {
  switch (request.url) {
    case "/":
      request.respond({
        body: `path: ${request.url} Home Page` + "\n",
      });
      break;
    case "/about":
      request.respond({
        body: `path: ${request.url} About Page ` + "\n",
      });
      break;
    case "/html":
      const html = await Deno.readTextFile("./index.html");
      request.respond({
        body: html + "\n",
      });
      break;
    case "/json":
      const data = JSON.stringify({
        name: "luis",
        last_name: "Tierrafria",
      });
      request.respond({
        body: data + "\n",
      });
      break;
    default:
      request.respond({
        status: 404,
      });
      break;
  }
}

export {};
