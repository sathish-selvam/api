const notFound = (req, res, next) => {
  res.status(404);
  res.set("Content-Type", "text/html");
  const url = req.originalUrl;
  //   res.send("<h1>hi</h1>");
  res.render("404", { url });
  /*  if (true) {
  } else {
    res.set("Content-Type", "application/json");
    res.json({
      message: "Page Not Found",
    });
  } */
};

const errorHanndling = (error, req, res, next) => {
  const statusCode = res.status !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    error: error.message,
    stack: process.env.NODE_ENV == "production" ? "🥞" : error.stack,
  });
};

module.exports = {
  notFound,
  errorHanndling,
};
