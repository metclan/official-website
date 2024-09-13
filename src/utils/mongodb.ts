import { MongoClient, Db } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;


if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not set');
}

if (!MONGODB_DB) {
    throw new Error('MONGODB_DB is not set');
}

const client = new MongoClient(MONGODB_URI);
const connection = client.db(MONGODB_DB);

let cachedConnection: Db | null = null
export function connectToDatabase() {
    try{
        if(connection){
            console.log("Using cached connection");
            cachedConnection = connection;
            return cachedConnection;
        }else{
            console.log("Creating new connection");
            const client = new MongoClient(MONGODB_URI as string);
            const db = client.db(MONGODB_DB as string);
            cachedConnection = db;
            return cachedConnection;
        }
        
    }catch(err){
        console.log("Error connecting to database");
    }
    
}