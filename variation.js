import { Configuration, OpenAIApi } from "openai";
import { createReadStream, writeFileSync } from "fs";

const configuration = new Configuration ({
    apiKey : 'your api key',
});

const openai = new OpenAIApi (configuration);

const prompt = 'a 3d render of protesters in cyberpunk times square'

const src = './1667882837895.png'

const result = await openai.createImageVariation(
    createReadStream(`./img/${src}`),
    1,
    "1024x1024",
);

const url = result.data.data[0].url;
console

//Save Image URL to disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer);