import app from "./app"; //start app
import "./database/mongoose"; //db conn

app.listen(app.get('port')) //set listening port

console.log(`Server listening on port ${app.get('port')}`)