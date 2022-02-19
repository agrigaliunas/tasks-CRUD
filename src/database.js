import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://localhost/crud-db");
    console.log("DB connected to: ", db.connection.name);
  } catch (e) {
    console.log(e);
  }
})();
