const express = require("express");
const cors = require("cors");
const processRoutes = require("./routes/processRoutes");

const systemRoutes = require("./routes/systemRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/system", systemRoutes);
app.use("/api/process", processRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
