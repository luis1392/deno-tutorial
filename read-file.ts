//Reading a file with deno -> use [OPTION]   --allow-read
const text = await Deno.readTextFile("./file.txt");
console.log(text);

export {};
