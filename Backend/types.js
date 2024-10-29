const zod = require('zod')              // Zod validation for data

const customerValidate = zod.object({
    firstName: zod.string().max(50),
    lastName: zod.string().max(50),
    userName: zod.string().min(3).max(50),
    password: zod.string()
})

const cutomerUpdate = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})

module.exports = {
    customerValidate,
    cutomerUpdate
}