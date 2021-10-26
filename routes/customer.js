const {executeQuery} = require("../config/db") 

const getAllCustomers = async (req, reply) => {
    try {
        let customerData = await executeQuery('select * from customers',[] )
        reply.status(200).send(customerData)
     } catch (err) {
         reply.status(500).send(err)
     }
}

const getCustomerById = async (req, reply) => {
    let id = req.params.id
    try {
        let customerData = await executeQuery('select * from customers where id=?',[id] )
        reply.status(200).send(customerData)
     } catch (err) {
         reply.status(500).send(err)
     }
}

const deleteCustomerById = async (req, reply) => {
    let id = req.params.id
    try {
        let customerData = await executeQuery('delete from customers where id=?',[id] )
        reply.status(200).send(customerData)
     } catch (err) {
         reply.status(500).send(err)
     }
}

const addCustomer = async (req, reply) => {
    try {
        const {ID,NAME,AGE,ADDRESS,PHONE_NO,EMAIL}= req.body
        let customerData = await executeQuery('insert into customers (ID,NAME,AGE,ADDRESS,PHONE_NO,EMAIL) values (?,?, ?, ?, ? ,?)',[ID,NAME,AGE,ADDRESS,PHONE_NO,EMAIL])
        reply.status(200).send(customerData)
    } catch (err) {
        reply.status(400).send(err)
    }
}

const updateCustomer = async (req, reply) => {
    let id = req.params.id
    try {
        const {NAME,AGE,ADDRESS,PHONE_NO,EMAIL}= req.body
        let customerData = await executeQuery(`update customers set NAME=?,AGE=?,ADDRESS=?,PHONE_NO=?,EMAIL=? where ID=${id}`,[NAME,AGE,ADDRESS,PHONE_NO,EMAIL])
        reply.status(200).send(customerData)
    } catch (err) {
        reply.status(400).send(err)
    }
}

module.exports = {
    getAllCustomers: getAllCustomers,
    getCustomerById: getCustomerById,
    deleteCustomerById: deleteCustomerById,
    addCustomer: addCustomer,
    updateCustomer: updateCustomer,
}