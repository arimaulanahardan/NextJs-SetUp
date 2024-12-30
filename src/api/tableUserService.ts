import { Iuser } from "@/interfaces/userInterface";
import axios from "axios";

export const tableUserService = {
  // Get all users
  getUsers: async (): Promise<Iuser[]> => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  },

  // Create a new user
  createUser: async (user: Iuser): Promise<Iuser> => {
    return axios
      .post("https://jsonplaceholder.typicode.com/posts", user)
      .then((res) => res.data);
  },

  // Update a user
  updateUser: async (id: number, data: Partial<Iuser>): Promise<Iuser> => {
    return axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then((res) => res.data);
  },

  // Delete a user
  deleteUser: async (id: number): Promise<void> => {
    return axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {});
  },
};
