import app from "./app";
import "./database";
import { PORT } from "./config"

app.listen(PORT);
console.log("Server is up on port ", 3000);
