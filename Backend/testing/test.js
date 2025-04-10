import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCnTROIII2xrUW6rpzDn_WdRFhiLKuze5I" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "i mean you dont have the access to the latest data",
  });
  console.log(response.text);
}

await main();