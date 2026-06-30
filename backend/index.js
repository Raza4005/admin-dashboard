import e from "express";
import { collectionName, connection} from "./dbconfig.js";
import cors from 'cors';
import { ObjectId } from "mongodb";

const app=e();

app.use(e.json());
app.use(cors());

app.post("/add-task",async (req,resp) => {
const db = await connection();
const collection = await db.collection(collectionName);
const result = await collection.insertOne(req.body);
if(result){
    resp.send({message:"New task added", success: true, result})
}else
    {
    resp.send({message:"Task not added", success: false})

}
})

app.get("/tasks",async (req,resp) => {
const db = await connection();
const collection = await db.collection(collectionName);
const result = await collection.find().toArray();
if(result){
    resp.send({message:"Task list fetched", success: true, result})
}else
    {
    resp.send({message:"Error catch after sometime", success: false})

}
})

app.delete("/delete/:id", async (req, resp) => {
    const db = await connection();
    const id = req.params.id;
    const collection = await db.collection(collectionName);
    const result = await collection.deleteOne({ _id: new ObjectId(id) })
    if (result) {
        resp.send({ message: 'task deleted ', success: true, result })
    } else {
        resp.send({ message: 'error try after sometime', success: false })
    }
})


app.listen(3200, () => {
  console.log("Server running on port 3200");
});