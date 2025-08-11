import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// CORS middleware ko yahan, routes se pehle, use karein
const origins = [
    "http://localhost:5173", // Aapke Vite frontend ka default port
    "https://your-app-name.vercel.app" // Yahan apna Vercel URL daalein
];

app.use(cors({
    origin: origins,
    credentials: true
}));

// Baaki ke middlewares
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import { userRoutes } from "./routes/user.routes.js";
import { productRoutes } from "./routes/product.routes.js";

// Routes ko plural naam ('users', 'products') ke saath use karein
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);

export { app };