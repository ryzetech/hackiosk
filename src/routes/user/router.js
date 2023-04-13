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
router.get("/", get);

import post from "./post.js";
router.post("/", post);

import patch from "./patch.js";
router.patch("/", patch);

/**
 * Export Router
 */
export default router;