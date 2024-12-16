import React from 'react';
import Card from './Card';

interface CheckTableProps {
  title: string;
  headers: string[];
  rows: {
    name: string;
    progress: string;
    quantity: string;
    date: string;
  }[];
}

const CheckTable: React.FC<CheckTableProps> = ({ title, headers, rows }) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, index) => (
              <tr key={index}>
                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.progress}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default CheckTable;
