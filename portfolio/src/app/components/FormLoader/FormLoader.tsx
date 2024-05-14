'use client';

import { FormLoaderProps } from '../../interfaces';
import './FormLoader.scss';

const FormLoader = ({ title = '', progress }: FormLoaderProps) => {
  return (
    <div className="col-sm-12">
      <div className="card card-info" style={{ minHeight: '20rem' }}>
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>

        <div className="overlay">
          <i className="fas fa-2x fa-sync-alt fa-spin"></i>
          <span style={{ clear: 'both' }}>Loading {title} contents...</span>
        </div>
      </div>
    </div>
  );
};

export default FormLoader;
