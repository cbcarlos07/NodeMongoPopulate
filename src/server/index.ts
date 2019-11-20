import env from '../environment'
import * as restify from 'restify'
import conn from '../service/mongodb'
import routes from '../routes'
class Application {
    port: any
    server: any
    constructor(){
        this.port = env.SERVER_PORT
        this.server = restify.createServer()
    }

    listen(){
        this.configRoute()
        conn.connection()
            .then( () => {
                this.server.listen( this.port, () =>{
                    console.log(`Server is listening on port ${this.port} and connected on database`)
                })    
            }).catch( err => console.error(err) )
        
    }

    configRoute(){
        routes( this.server )
    }
}

export default new Application