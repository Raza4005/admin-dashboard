import { MongoClient } from "mongodb";

const url = "mongodb+srv://razach1932_db_user:razamongodb@cluster0.6dkc03a.mongodb.net/?appName=Cluster0";
const dbName = "node-project";

export const collectionName = "todo";

const client = new MongoClient(url);

export const connection = async () => {
  await client.connect();          // connect once
  return client.db(dbName);        // correct return
};