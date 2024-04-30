/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactTyped } from 'react-typed';
import { constants, YEARS_EXPRIENCE } from '../../utils';

function Hero() {
  const { THREE_SECONDS, HALF_THENTH_SECOND, QUARTER_THENTH_SECOND } =
    constants;

  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{ backgroundImage: 'url(assets/img/hero-bg.jpg)' }}
    >
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">Curtis Mumby</h1>
            <p className="hero-subtitle">
              <span
                className="typed"
                data-typed-items="Full Stack Web Architect, JavaScript/TypeScript - Python - PHP,React - Node - Git - AWS - Docker, Postgres - Mongo - Oracle, [YEARS] Years Web Deb Experience, Scroll For More Information"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
