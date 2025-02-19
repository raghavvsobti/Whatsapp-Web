import dotenv from "dotenv";
import app from "./app.js";
import logger from "./configs/logger.config.js";

// dotenv configuration
dotenv.config();


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	logger.info("server is listening on port..", PORT )
})
