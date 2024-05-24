import express from "express";
import cors from "cors";
import { Server as SocketServer } from "socket.io";
import http from "http";
import { router as iniciar_sesion } from "./routes/user.routes.js";
import { router as createGuide } from "./routes/Guide.routes.js";
import { router as createTourist } from "./routes/Tourist.routes.js";
import { router as login } from "./routes/auth/Login.routes.js";
import { router as touristPackage } from "./routes/Package/Package.routes.js";
import { router as provider } from "./routes/Provider/Provider.routes.js";
import { router as itinerary } from "./routes/Package/itinerary/Itinerary.routes.js";
import {router as reserva} from "./routes/Package/reserva/reserva.routes.js"
console.clear();
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    socket.broadcast.emit("chat", {
      from: socket.id,
      data
    });
  });
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(iniciar_sesion);
app.use(createGuide);
app.use(createTourist);
app.use(login);
app.use(touristPackage);
app.use(provider);
app.use(itinerary);
app.use(reserva)

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
