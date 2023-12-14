import React, { useState } from "react";
import "./UserTable.css";
import { Table } from "react-bootstrap";
import { UserInfo } from "shared";

interface UserTableProps {
  users: UserInfo[];
}
const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const maxRows = 10;
  const emptyRows = Array.from({ length: Math.max(0, maxRows - users.length) });
  return (
    <>
      <div className="d-flex justify-content-center mt-3 tableContainer overflow-auto w-50">
        {
          <Table className="tableContents m-0 " striped bordered hover size="sm">
            <thead>
              <tr>
                <th className="fs-6 py-0 px-4">Email</th>
                <th className="fs-6 py-0 px-4">Number</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td className="fs-6 py-0 px-4" style={{ width: "400px" }}>
                    {user.email}
                  </td>
                  <td className="fs-6 py-0 px-4" style={{ width: "400px" }}>
                    {user.number}
                  </td>
                </tr>
              ))}

              {emptyRows.map((_, index) => (
                <tr key={`empty-${index}`}>
                  <td className="fs-6 py-0 px-4" style={{ width: "400px" }}>
                    -
                  </td>
                  <td className="fs-6 py-0 px-4" style={{ width: "400px" }}>
                    -
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      </div>
    </>
  );
};

export default UserTable;
