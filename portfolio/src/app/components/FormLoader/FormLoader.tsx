'use client';

import { FormLoaderProps } from '../../interfaces';
import './FormLoader.scss';

const FormLoader = ({ title = '', progress }: FormLoaderProps) => {
  return (
    <>
      <div className="card skeleton-header">
        <div className="skeleton-textfield title"></div>
        <div className="skeleton-textfield description"></div>
        <div className="overlay"></div>
      </div>

      <div className="col-sm-12">
        <div className="card card-info" style={{ minHeight: '20rem' }}>
          <div className="card-header">
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="card card-body card-skeleton">
            <div className="skeleton-image"></div>
            <div className="card-body-inner">
              <div className="skeleton-textfield"></div>
              <div className="skeleton-textfield"></div>
              <div className="skeleton-textarea"></div>
            </div>
          </div>

          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
};

export default FormLoader;
