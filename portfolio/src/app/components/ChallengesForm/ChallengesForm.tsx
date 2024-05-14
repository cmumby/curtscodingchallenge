import Link from 'next/link';
import './ChallengesForm.scss';
import { useState } from 'react';

const ChallengesForm = () => {
  return (
    <>
      <h3 id="challenges">Coding Challenges Section</h3>
      <p>
        <strong>Create and Edit </strong> articles for{' '}
        <strong>Coding Challenges</strong> section.{' '}
      </p>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Challeges Articles</h3>
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
                <th>Language</th>
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
                  <Link href="/">
                    17. Letter Combinations of a Phone Number.md
                  </Link>
                </td>
                <td>JavaScript</td>
                <td>Curtis Mumby</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="date">3/25/2024</span>
                </td>
              </tr>
              <tr>
                <td>30. Substring with Concatenation of All Words.md</td>
                <td>JavaScript</td>
                <td>Curtis Mumby</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-danger"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </td>
                <td>
                  <span className="date">3/25/2024</span>
                </td>
              </tr>
              <tr>
                <td>11. Container With Most Water.md</td>
                <td>JavaScript</td>
                <td>Curtis Mumby</td>
                <td>
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar progress-bar-success"
                      style={{ width: '100%' }}
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

export default ChallengesForm;
