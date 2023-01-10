import { SOCKET_URL } from "./constants/api";
import io, { Socket } from "socket.io-client";

let socket: Socket;

export const connectSocket = () => {
  socket = io(`${SOCKET_URL}`, {
    path: `/socket.io`,
    forceNew: true,
    reconnectionAttempts: 3,
    timeout: 2000,
    transports: ["websocket"],
  });
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};

export const subscribeToSocket = (key: string, data: any) => {
  socket.emit(key, data);
};
