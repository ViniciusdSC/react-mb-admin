import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import DataTable from '~/components/DataTable';

export default function SistemaList() {
  const [system] = useState([
    {
      name: 'teste', id: 1, life: 60, mana: 60,
    },
    {
      name: 'teste', id: 2, life: 60, mana: 60,
    },
  ]);
  const columns = [
    { name: 'id', text: 'System Code' },
    { name: 'name', text: 'System Name' },
    { name: 'life', text: 'System Life' },
    { name: 'mana', text: 'System Mana' },
  ];

  return (
    <div className="card card-primary card-outline">
      <div className="card-header">
        <Link to="/create" className="btn btn-primary float-right">
          <i className="fas fa-plus mr-2" />
          Sistema
        </Link>
      </div>
      <div className="card-body">
        <DataTable
          items={system}
          fields={columns}
          onSort={(direction) => {
            console.log(direction);
          }}
          striped
          bordered
        />
      </div>
    </div>
  );
}
