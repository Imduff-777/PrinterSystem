import {app} from "./index.js"

const port = Number(process.env.PORT)

app.listen(port, '127.0.0.1',  () => {
    console.log(`server rodando na porta ${port}`)
    
})
