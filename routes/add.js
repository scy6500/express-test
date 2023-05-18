const express = require("express");

const router = express.Router();

/**
 * @swagger
 * paths:
 *   /add:
 *     post:
 *       summary: 숫자 두 개를 더하는 API
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 first_num:
 *                   type: number
 *                 second_num:
 *                   type: number
 *       responses:
 *         '200':
 *           description: success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   result:
 *                     type: number
 *         '400':
 *           description: invalid param
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
router.post("", (req, res) => {
  const { first_num, second_num } = req.body;
  if (typeof first_num !== "number" || typeof second_num !== "number") {
    return res.status(400).json({ message: "invalid param" });
  }

  const sum = first_num + second_num;
  return res.json({ result: sum });
});

module.exports = router;