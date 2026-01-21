import {app} from "./index.js"

const port = process.env.PORT

app.listen(port, () => {
    console.log("server rodando na porta 8080")
})