const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const dotenv=require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL=process.env.MONGO_URI;
mongoose.connect(MONGO_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:",err));
app.use("/api/products", productRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));


// mongoose
//   .connect("mongodb://localhost:27017/productdb", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));




