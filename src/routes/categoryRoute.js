import express from "express";

import { getCategories } from "../controllers/categoryController.js";
import { checkToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", checkToken, getCategories);

export default router;