const fastify = require("fastify")()
const routes = require('./routes/customerRoutes')
const cors = require("cors")
// const serverPort= process.env.SERVER_PORT
const serverPort= 6006

fastify.register(routes)
const startServer = async () => {
       try {
        await fastify.listen(serverPort,(err, port)=>{
        if(err) return err
        console.log(`server is running on ${port}`)
        })
       } catch (err) {
           console.warn(err)
           process.exit(1)
       }
}

startServer()
