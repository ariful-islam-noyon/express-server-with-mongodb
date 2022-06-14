const mongoose =require('mongoose');

// set mongoDB connect
const connectMongoDB = async () => {
    
    try{

        let connect = await mongoose.connect('mongodb+srv://ariful:Ariful2020$@my-website.fxogs5z.mongodb.net/academy?retryWrites=true&w=majority');
        console.log(`mongoDB connection success. Host : ${connect.connection.host}`.green);

    }catch(error){

        console.log(`${error}`.red);
    }
}

// export connection
module.exports = connectMongoDB;