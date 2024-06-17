import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
import {
  createClient,
  getUserClients,
  updateStatus,
} from "../controllers/clients.js";
const router = new Router();

//Create Client
router.post("/", checkAuth, createClient);

router.get("/", checkAuth, getUserClients);

router.put("/:id", checkAuth, updateStatus);

export default router;
