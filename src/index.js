const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { mongoose } = require('./database')

const app = express()

//Settings
//toma el puerto del sistema operativo, por ejemplo en la nube
app.set('port', process.env.PORT || 3000)

//Middlewares
//dev para ver el formato de texto
app.use(morgan('dev'))
//comprueba que los datos que pasan del servidor-cliente son json
//reemplazo a bodyParser
app.use(express.json())


//Routes
app.use('/api/tasks',require('./routes/task.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//starting the server
app.listen(app.get('port'), ()=>{
	console.log(`Server on port ${app.get('port')}`)
})