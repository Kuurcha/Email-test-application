import React, { useState } from "react";

import { Table } from "react-bootstrap";

const UserTable = () => {
  const [users, setUsers] = useState<any[]>([]);
  return (
    <>
      {users.length > 0 && (
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              {/* Add other necessary headers for data */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                {/* Add other necessary cells for data */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserTable;
