import React, { useState } from "react";

import { Table } from "react-bootstrap";
import { UserInfo } from "shared";

interface UserTableProps {
  users: UserInfo[];
}
const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <>
      {users.length > 0 && (
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.email}</td>
                <td>{user.number}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserTable;
