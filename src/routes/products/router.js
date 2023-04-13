/**
 * Imports
 */
import { Router } from "express";

/**
 * Router
 */
const router = Router({ mergeParams: true });

/**
 * Routes
 */
import get from "./get.js";
import put from "./put.js";
import del from "./del.js";
router.get("/", get);
router.put("/", put);
router.delete("/", del);

/**
 * Export Router
 */
export default router;