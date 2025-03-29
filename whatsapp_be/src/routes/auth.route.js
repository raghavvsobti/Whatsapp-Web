import express from "express";
import trimRequest from "trim-request";
import { register } from "../controllers/auth.controller";

const router = express.Router();

router.route("/register").post(trimRequest.all, register);

export default router;
