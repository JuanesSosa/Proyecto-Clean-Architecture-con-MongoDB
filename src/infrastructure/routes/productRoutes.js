import { Router } from "express";

export default function productRoutes(controller) {

  const router = Router();

  router.post("/products", (req, res) => controller.create(req, res));

  router.get("/products", (req, res) => controller.getAll(req, res));

  return router;
}