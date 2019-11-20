import service from "../service"
const prefix = '/author'
const authorRoute = server =>{
    server.get( prefix, async (req, res, next) =>{
        res.send( await service.author().all() ) 
        next()
    })
    server.get( `${prefix}/:id`, async (req, res, next) =>{
        const {id} = req.params
        res.send( await service.author().find( id ) )
    })
}

export default authorRoute