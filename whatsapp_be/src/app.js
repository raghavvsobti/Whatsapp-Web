import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import fileUpload from "express-fileupload";
import routes from "./routes/index.js";

const app = express();

// parse json req url
app.use(express.json());

// parse json req body
app.use(express.urlencoded({ extended: true }));

// morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// helmet
app.use(helmet());

// sanitize
app.use(mongoSanitize());

// Enable cookie parser
app.use(cookieParser());

// gzip Compression
app.use(compression());

// fileUpload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//api v1 routes
app.use("/api/v1", routes);

app.use(async (req, res, next) => {
  next(createHttpError.NotFound("This route does not exist."));
});

//error handling
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

export default app;
