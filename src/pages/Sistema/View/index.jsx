import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import DetailView from '~/components/DetailView';

const View = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="card card-primary card-outline">
      <div className="card-header">
        <h4>Dados do sistema</h4>
      </div>
      <div className="card-body">
        <DetailView
          values={{
            teste: 'Ola Mundo',
            teste2: 'AAAAAAA',
          }}
        />
      </div>
    </div>
  );
};

export default View;
