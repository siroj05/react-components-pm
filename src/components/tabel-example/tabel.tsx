import React from "react";

const TableWithFixedColumn = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="sticky left-0 bg-gray-100 border border-gray-300 p-2">
              Kolom 1 (Statis)
            </th>
            <th className="border border-gray-300 p-2">Kolom 2</th>
            <th className="border border-gray-300 p-2">Kolom 3</th>
            <th className="border border-gray-300 p-2">Kolom 4</th>
            <th className="border border-gray-300 p-2">Kolom 5</th>
            <th className="border border-gray-300 p-2">Kolom 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="sticky left-0 bg-gray-100 border border-gray-300 p-2">
              Data 1
            </td>
            <td className="border border-gray-300 p-2">Data 2</td>
            <td className="border border-gray-300 p-2">Data 3</td>
            <td className="border border-gray-300 p-2">Data 4</td>
            <td className="border border-gray-300 p-2">Data 5</td>
            <td className="border border-gray-300 p-2">Data 6</td>
          </tr>
          <tr>
            <td className="sticky left-0 bg-gray-100 border border-gray-300 p-2">
              Data 2
            </td>
            <td className="border border-gray-300 p-2">Data 2</td>
            <td className="border border-gray-300 p-2">Data 3</td>
            <td className="border border-gray-300 p-2">Data 4</td>
            <td className="border border-gray-300 p-2">Data 5</td>
            <td className="border border-gray-300 p-2">Data 6</td>
          </tr>
          {/* Tambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithFixedColumn;
