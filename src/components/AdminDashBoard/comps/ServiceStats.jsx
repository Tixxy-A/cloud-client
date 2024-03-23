import React from "react";

const usersData = [
  {
    id: 0,
    user: "Aazain Shah",
    userId: "U101",
    provider: "Azure",
    providerId: "P101",
  },
  {
    id: 1,
    user: "Anuj Raut",
    userId: "U102",
    provider: "AWS",
    providerId: "P102",
  },
  {
    id: 2,
    user: "Sahil",
    userId: "U103",
    provider: "Azure",
    providerId: "P103",
  },
];

export default function ServiceStats() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Service Status</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="relative left-1">User Name</th>
              <th className="relative left-1">User ID</th>
              <th className="relative left-1">Provider Name</th>
              <th className="relative left-1">Provider ID</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((stats) => (
              <tr key={stats.id}>
                <td>{stats.user}</td>
                <td>{stats.userId}</td>
                <td>{stats.provider}</td>
                <td>{stats.providerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
