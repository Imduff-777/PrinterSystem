import app from "./index.js"

const port = Number(process.env.PORT)

console.log(process.env.PORT)


app.listen(port, '0.0.0.0',  () => {
    console.log(`server rodando na porta ${port}`)
})
