import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useStore } from 'react-redux';
import SystemForm from '~/components/System/Form';

export default function SistemaCreate() {
  const store = useStore();
  return (
    <div className="card card-primary card-outline">
      <div className="card-header">
        <h4>Follow the form bellow to create a new System</h4>
      </div>
      <div className="card-body">
        <SystemForm onSubmit={(form) => {
          store.dispatch({
            type: 'CREATE',
            payload: form,
          });
        }}
        />
      </div>
    </div>
  );
}
