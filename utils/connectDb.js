import mongoose from 'mongoose'

const connection = {}

async function connectDb() {
    // for most applications you have a server that is constantly running
    // when possible next tries to dispose inactive pages
    if (connection.isConnected) {
        console.log("Using existing connection")
        return
    }
    
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB Connected")
    connection.isConnected = db.connections[0].readyState
}

export default connectDb