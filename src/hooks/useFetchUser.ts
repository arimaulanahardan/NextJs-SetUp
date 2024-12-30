import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Iuser } from "@/interfaces/userInterface";
import { tableUserService } from "@/api/tableUserService";

export const useFetchUser = () => {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      const users = await tableUserService.getUsers();
      setUsers(users);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addUser = useCallback(async (user: Iuser) => {
    try {
      const newUser = await tableUserService.createUser(user);
      setUsers((prev) => [...prev, newUser]);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const editUser = useCallback(async (id: number, user: Iuser) => {
    try {
      const updatedUser = await tableUserService.updateUser(id, user);
      setUsers((prev) =>
        prev.map((user) => (user.id === id ? updatedUser : user))
      );
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  const removeUser = useCallback(async (id: number) => {
    try {
      await tableUserService.deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, addUser, editUser, removeUser };
};
