import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import fileUpload from "express-fileupload";


const app = express();

// parse json req url
app.use(express.json());

// parse json req body
app.use(express.urlencoded({extended: true}));

// morgan
if (process.env.NODE_ENV !== 'production') { 
	app.use(morgan("dev"))
}

// helmet
app.use(helmet())

// sanitize 
app.use(mongoSanitize())

// Enable cookie parser
app.use(cookieParser())

// gzip Compression
app.use(compression())

// fileUpload
app.use(fileUpload({
	useTempFiles: true
}))

// CORS
app.use(cors({
	origin: 'http://localhost:3000'
}))

app.get("/", (req, res) => { 
	res.send("Hello from server!")
})

app.post("/", (req, res) => { 
	console.log(req.body);
	res.send( req.body)
})

export default app;