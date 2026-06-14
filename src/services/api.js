// Base URL — swap this to your Spring Boot server when ready
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || "Something went wrong");
  }
  return res.json();
};

// ─── Menu ────────────────────────────────────────────────────────────────────

export const fetchMenuItems = () =>
  fetch(`${BASE_URL}/menu`).then(handleResponse);

export const fetchMenuItemById = (id) =>
  fetch(`${BASE_URL}/menu/${id}`).then(handleResponse);

export const fetchMenuByCategory = (category) =>
  fetch(`${BASE_URL}/menu/category/${category}`).then(handleResponse);

// ─── Orders ──────────────────────────────────────────────────────────────────

export const placeOrder = (orderData, token) =>
  fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  }).then(handleResponse);

export const fetchUserOrders = (token) =>
  fetch(`${BASE_URL}/orders/my`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(handleResponse);

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const loginUser = (credentials) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then(handleResponse);

export const registerUser = (userData) =>
  fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  }).then(handleResponse);

// ─── Contact ─────────────────────────────────────────────────────────────────

export const sendContactMessage = (formData) =>
  fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then(handleResponse);