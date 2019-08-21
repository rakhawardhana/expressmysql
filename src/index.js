// const express = require('express')

// const userRouter = require('./routers/userRouter')
// const taskRouter = require('./routers/taskRouter')

// const app = express()
// const port = 2019

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Berhasil Running di ' + port);
    
// })
const express = require('express')
const powrt = require('./config/port')
const cors = require('cors')

const userRouter = require('./routers/userRouter')


const app = express()
const port = powrt

app.use(express.json())
app.use(cors())
app.use(userRouter)


app.get('/', (req, res) => {
    res.send('Selamat Datang Brok!!')
})

app.listen(port, () => {
    console.log('Berhasil Running di ' + port);
    
})