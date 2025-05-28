import { jwtDecode } from 'jwt-decode';

const STORAGE_KEY = 'jwt';

export function saveToken(token) {
    localStorage.setItem(STORAGE_KEY, token);
}

export function getToken() {
    return localStorage.getItem(STORAGE_KEY);
}

export function removeToken() {
    localStorage.removeItem(STORAGE_KEY);
}

export function extractUserId() {
    const token = getToken();
    if (!token) return null;

    try {
        const payload = jwtDecode(token);
        console.log("payload", payload);
        
        return payload.user_id || null;
    } catch {
        return null;
    }
}
