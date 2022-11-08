import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

const configuration = new Configuration ({
    apiKey : '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',
});

const openai = new OpenAIApi (configuration);

const prompt = 'a 3d render of protesters in cyberpunk times square'

const result = await openai.createImage ({
    prompt,
    n: 1,
    size: "1024x1024",
    user: 'cyberpanther'
});

const url = result.data.data[0].url;
console.log(url);

//Save Image URL to disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer);
