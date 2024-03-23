import React from "react";

const recentOrderData = [
  {
    name: "WayCloud",
    cost: 1260,
    availability: 97.5,
    usability: "Medium",
    security_management: "Low",
    flexibility: "Low",
    response_time: 302.75,
    id: 11,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "AWS",
    cost: 1500,
    availability: 99.99,
    usability: "High",
    security_management: "High",
    flexibility: "Medium",
    response_time: 100.5,
    id: 12,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "DAVV Cloud",
    cost: 10000,
    availability: 50.0,
    usability: "Low",
    security_management: "Medium",
    flexibility: "High",
    response_time: 100.5,
    id: 123,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "Salesforces",
    cost: 1050,
    availability: 98.6,
    usability: "Medium",
    security_management: "High",
    flexibility: "Medium",
    response_time: 159.6,
    id: 13,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "Azure",
    cost: 2000,
    availability: 99.99,
    usability: "High",
    security_management: "High",
    flexibility: "High",
    response_time: 80.5,
    id: 14,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "Rateeval",
    cost: 500,
    availability: 90.54,
    usability: "Low",
    security_management: "Low",
    flexibility: "Medium",
    response_time: 548.2,
    id: 15,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
  {
    name: "GCP",
    cost: 1850,
    availability: 99,
    usability: "High",
    security_management: "High",
    flexibility: "Medium",
    response_time: 120.6,
    id: 16,
    img: "https://img.icons8.com/color-glass/48/000000/cloud-user.png",
  },
];

export default function ProviderStats() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Available Providers</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="relative left-1">Name</th>
              <th className="relative left-1">Cost</th>
              <th className="relative left-1">Availability</th>
              <th className="relative left-1">Usability</th>
              <th className="relative left-1">Security Management</th>
              <th className="relative left-1">Flexibilty</th>
              <th className="relative left-1">Response Time</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id}>
                <td>{order.name}</td>
                <td>{order.cost}</td>
                <td>{order.availability}</td>
                <td>{order.usability}</td>
                <td>{order.security_management}</td>
                <td>{order.flexibility}</td>
                <td>{order.response_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
