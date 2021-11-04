import { MongoClient } from "mongodb";
import config from "./config.js";
const client = new MongoClient(config.urlDatabase);

await client.connect();
const collection = client.db().collection('companies');

console.log(collection)
