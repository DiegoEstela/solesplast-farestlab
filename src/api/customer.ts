import axios from "axios";
import { Customers } from "../types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Obtener clientes
export const getCustomers = async (search = "") => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/customers?search=${encodeURIComponent(
      search
    )}`
  );
  if (!response.ok) {
    throw new Error("Error obteniendo clientes");
  }
  return response.json();
};
// Agregar un nuevo cliente
export const addCustomer = async (customer: Customers) => {
  const response = await axios.post(`${API_URL}/customers`, customer);
  return response.data;
};

// **Eliminar cliente**
export const deleteCustomer = async (id: number) => {
  const response = await axios.delete(`${API_URL}/customers${id}`);
  return response.data;
};

// **Actualizar cliente**
export const updateCustomer = async (customer: Partial<Customers>) => {
  const response = await axios.put(
    `${API_URL}/customers/${customer.id}`,
    customer
  );
  return response.data;
};
