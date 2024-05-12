import Link from 'next/link';
import './PortfolioForm.scss';
import { useState } from 'react';

const PortfolioForm = () => {
  return (
    <>
      <h3 id="portfolio">Portfolio Section</h3>
      <p>
        <strong>Create and Edit </strong> articles for{' '}
        <strong>Portfolio</strong> section.{' '}
      </p>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Portfolio Items</h3>
          <div className="card-tools">
            <ul className="pagination pagination-sm float-right">
              <li className="page-item">
                <a className="page-link" href="#">
                  «
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  »
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-body p-0">
          <table className="table-striped table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Progress</th>
                <th style={{ width: '20px' }}> Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {/* <i
                    className="fas fa-file-code"
                    style={{ fontSize: '1.666rem', color: '#17a2b8' }}
                  ></i> */}
                  {'    '}
                  <Link href="/">Project Twitter/ X Clone</Link>
                </td>
                <td>Curtis Mumby</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: '55%' }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="date">3/25/2024</span>
                </td>
              </tr>
              <tr>
                <td>Project Portfolio / Admin</td>
                <td>Update software</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: '55%' }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="date">3/25/2024</span>
                </td>
              </tr>
              <tr>
                <td>Sample Project</td>
                <td>Update software</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: '55%' }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="date">3/25/2024</span>
                </td>
              </tr>
              {/* Additional rows */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PortfolioForm;
