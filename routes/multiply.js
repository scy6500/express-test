const express = require("express");
const { multiplyBody } = require("../joi");

const router = express.Router();

/**
 * @swagger
 * paths:
 *   /multiply:
 *     post:
 *       summary: 숫자 두 개를 곱하는 API
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
router.post("/multiply", (req, res) => {
  const validData = multiplyBody.validate(req.body);
  if (validData.error) {
    return res.status(400).json({ message: "invalid param" });
  }
  const { first_num, second_num } = req.body;
  const result = first_num * second_num;
  return res.json({ result });
});

module.exports = router;
