import express from "express";
import { getShoppingList, postListItem } from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  console.log('yo')
  const data = await getShoppingList();
  console.log('hi', data)
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem } = req.body;
  const result = await postListItem(listItem);
  res.status(201).json({ success: true, payload: result });
});

export default router;
