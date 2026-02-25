import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Box Configurator Engine Running");
});

app.post("/calculate", (req, res) => {

  const { L, W, H, qty } = req.body;

  const flatWidth = (2 * L) + (2 * H) + 15;
  const flatHeight = W + (2 * H);

  const area = (flatWidth/1000) * (flatHeight/1000);
  const unitCost = area * 6;
  const total = unitCost * qty * 1.35;

  res.json({
    flatWidth,
    flatHeight,
    total
  });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
