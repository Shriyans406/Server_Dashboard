const express = require("express");
const cors = require("cors");
const processRoutes = require("./routes/processRoutes");

const systemRoutes = require("./routes/systemRoutes");

const serviceRoutes = require("./routes/serviceRoutes");

const logRoutes = require("./routes/logRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/system", systemRoutes);
app.use("/api/process", processRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/logs", logRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
