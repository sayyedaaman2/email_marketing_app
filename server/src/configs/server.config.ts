import dotenv from 'dotenv'
if(process.env.NODE_ENV !== 'production'){
    dotenv.config();
}


const PORT = process.env.PORT 
export default PORT;