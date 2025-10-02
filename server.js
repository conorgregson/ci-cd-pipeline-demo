import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server on http://localhost:${port}`));
}

export default app; // exported for tests
