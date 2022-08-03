import mongoose from 'mongoose'
try {
    mongoose.connect('mongodb://localhost:27017',{useNewUrlParser: true, dbName:'Blog-DB'});
    console.log('mongo connected');
} catch (error) {
    console.log('Error connection :'+ error);
}
