// src/app/posts/components/FilterDropdown.tsx

import React from "react";
import { User } from "@/types";

interface FilterDropdownProps {
  users: User[];
  onSelectUser: (userId: number | null) => void; // Accept user ID or null for 'All Users'
}

export default function FilterDropdown({
  users,
  onSelectUser,
}: FilterDropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = event.target.value ? parseInt(event.target.value) : null; // Parse user ID
    onSelectUser(userId);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="user-filter"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Filter by User:
      </label>
      <select
        id="user-filter"
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
