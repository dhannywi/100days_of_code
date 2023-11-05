import express from "express";
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

// update User
router.put("/:id", verifyToken, update)

// delete User
router.delete("/:id", verifyToken, deleteUser)

// get a User
router.get("/find/:id", getUser)

// subscribe a User
router.put("/sub/:id", verifyToken, subscribe)

// unsubscribe a User
router.put("/unsub/:id", verifyToken, unsubscribe)

// like a Video
router.put("/like/:videoId", verifyToken, like)

// dislike a Video
router.put("/dislike/:id", verifyToken, dislike)


export default router;