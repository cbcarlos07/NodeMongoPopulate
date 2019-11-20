import * as mongoose from 'mongoose'
import env from '../../environment'
class Connection{
    connection(){
        return mongoose.connect( `${env.DB_HOST}${env.DB_SCHEMA}`, { useNewUrlParser: true, useUnifiedTopology: true })
    }
}
const conn = new Connection()
export default conn