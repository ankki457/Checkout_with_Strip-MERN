const express = require("express");
const cors = require("cors");
const stripeRoutes = require("./routes/stripeRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/stripe", stripeRoutes);

app.get("/", (req, res) => {
  res.send("This is the Stripe demo");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));