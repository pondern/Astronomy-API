import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set("returnOriginal", false)
mongoose.connect("mongodb://127.0.0.1:27017/astronomy-api")
.catch((err) => {
    console.log(`Error connection go MongoDB: ${err.message}`);
})

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB, my dude!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;