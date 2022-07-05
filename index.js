const app = require("./src/app");
const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Server is runnting at ${PORT} and type of ${typeof PORT}`);
});
