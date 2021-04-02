import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send({
    App: "goxo",
    version: "1.0.0",
    author: "Barbara Diaz"
  });
});

export default router;
