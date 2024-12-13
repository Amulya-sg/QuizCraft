import { log } from "console";
import { Error, connect, disconnect } from "mongoose";

async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("Could not connect to the Mongo Database")
    }
    
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error)
        throw new Error("Could not disconnect to the Mongo Database")
    }
    
}

export {connectToDatabase,disconnectFromDatabase};