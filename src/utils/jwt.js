// src/utils/jwt.js
import { jwtDecode } from "jwt-decode";

export function getUserIdFromToken() {
  const token = localStorage.getItem("jwt");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    console.log("user", decoded);
    return decoded.user_id || decoded.id || decoded.sub || null;
  } catch (e) {
    console.error("Ошибка декодирования токена:", e);
    return null;
  }
}
