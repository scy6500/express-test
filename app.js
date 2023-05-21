const express = require("express");
const app = express();
const addRouter = require("./routes/add");
const substractRouter = require("./routes/subtract");
const multiplyRouter = require("./routes/multiply");
const divideRouter = require("./routes/divide");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);

const { swaggerUi, specs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("", addRouter);
app.use("", substractRouter);
app.use("", multiplyRouter);
app.use("", divideRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
