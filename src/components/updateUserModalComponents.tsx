"use client";
import React, { useState } from "react";
import { Iuser } from "@/interfaces/userInterface";

interface UpdateUserModalProps {
  user: Iuser;
  onUpdate: (id: number, updatedUser: Partial<Iuser>) => void;
  onClose: () => void;
}

export const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  user,
  onUpdate,
  onClose,
}) => {
  const [formData, setFormData] = useState<Partial<Iuser>>({
    title: user.title,
    body: user.body,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(user.id, formData);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={formData.body || ""}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        />
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};
