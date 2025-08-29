import React, { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
   const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch API data
useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {setUsers(response.data); 
      console.log(response);})
      .catch((error) => console.error("Error fetching users:", error));
      
  }, []);

  // Filter by name
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort by field
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortField === "name") return a.name.localeCompare(b.name);
    if (sortField === "email") return a.email.localeCompare(b.email);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <main>
     <div className="bg-[#00707c0d] p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#00707c]">User Directory-React Task</h1>

      {/* Search + Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded-md w-full sm:w-1/2 shadow-sm"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="border p-2 rounded-md shadow-sm"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table-auto w-full border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-white text-left">
              <th className="p-3 border text-[#00d4eb]">Name</th>
              <th className="p-3 border text-[#00d4eb]">Email</th>
              <th className="p-3 border text-[#00d4eb]">Role/Phone</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className="p-3 border">
                    {user.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 border text-center" colSpan="3">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
         &lt;&lt;
        </button>
        <span className="px-3 py-1">
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          &gt;&gt;
        </button>
      </div>
    </div>


 </main>
  )
}