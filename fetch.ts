// Simple feth with deno -> use [OPTION] --allow-net
const response = await fetch("https://rickandmortyapi.com/api/character/292");
const data = await response.json();
console.log(data);

export {};
