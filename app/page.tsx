"use client";

import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import { debounce } from "./utils/debounce";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  const handleSearch = debounce((term: string) => {
    setSearchTerm(term);
  }, 500); // debounce the search for 5 miliseconds
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl  text-center font-bold mb-4  hidden  md:block">
        User List
      </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      {loading && (
        <p>
          <ClipLoader
            color="black"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </p>
      )}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}
