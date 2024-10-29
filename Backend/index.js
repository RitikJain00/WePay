const express = require('express')
const cors = require('cors')


const app = express();
const PORT = 3000;

const userRoute = require('./Routes/customer.js')
const accountRoute = require('./Routes/account.js')

app.use(cors());
app.use(express.json());
app.use('/user',userRoute)
app.use('/account',accountRoute)



app.listen(PORT, () => console.log(`server is running at ${PORT}`))