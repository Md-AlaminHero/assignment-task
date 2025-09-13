import { MongoClient, ServerApiVersion } from "mongodb";

// user: test_data
// pass: 7SryQIujMEgLrecE

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.nrp7gyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


export const collectionNameObj = {
  productCollection: "test-data",
  userCollection: "test-user",
  addProductsCollection: "add-products"
}

const uri = "mongodb+srv://test_data:7SryQIujMEgLrecE@cluster0.nrp7gyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export default function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return client.db('test-database').collection(collectionName)
}
