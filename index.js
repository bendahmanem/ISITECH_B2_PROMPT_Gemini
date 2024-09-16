require("dotenv").config();

//const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";

import fs from "fs"; // Permet de lire/ecrire des fichiers

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

console.log("process.env.GOOGLE_API_KEY", process.env.GOOGLE_API_KEY);

// async function run() {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//   const result = await model.generateContent([
//     "What is in this photo?",
//     {
//       inlineData: {
//         data: Buffer.from(fs.readFileSync("path/to/image.png")).toString(
//           "base64"
//         ),
//         mimeType: "image/png",
//       },
//     },
//   ]);
//   console.log(result.response.text());
// }
// run();
