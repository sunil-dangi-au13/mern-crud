const mongoose = require("mongoose");
const mongoURI = 'mongodb://localhost:27017/mern-crud'

 
// const dbConnect = async()=>{
//     try {
//        e. mongoose.set('strictQuery', false);
//         const conn = await mongoose.connect(mongoURI,
//         {
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//             // useFindAndModify:false
            
//           })
//         console.log('MongoDB connected Sucessfully');
        
//     } catch (error) {
//        console.log('Not connected'); 
//     }

    
// }
module.exports = dbConnect