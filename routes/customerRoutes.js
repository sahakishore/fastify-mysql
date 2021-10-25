const { default: fastify } = require('fastify')
const customer = require('./customer')

const routes = async (fastify) =>{
    fastify.get("/customers", customer.getAllCustomers)
    fastify.get("/customer/:id", customer.getCustomerById)
    fastify.delete("/deleteCustomer/:id", customer.deleteCustomerById)
    fastify.post("/addCustomer",customer.addCustomer)
    fastify.put("/updateCustomer/:id", customer.updateCustomer)
}
module.exports = routes