const defaultRoute = server => {
    server.get('/', (req, res, next)=>{
        res.send({msg: 'Welcome to api test'})
        next()
    })
}
export default defaultRoute