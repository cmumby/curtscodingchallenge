import { array, number } from 'prop-types';
import { useState } from 'react';

const AboutForm = () => {
  let [numberOfSkills, setNumberOfSkills] = useState(1);
  const skills = [];

  function handleSkillAmount(event: any) {
    //alert('test');
    event.preventDefault();
    if (numberOfSkills < 6) {
      setNumberOfSkills((numberOfSkills += 1));
    }

    return false;
  }

  function handleSkillRemoval(event: any) {
    event.preventDefault();
    if (numberOfSkills > 1) {
      setNumberOfSkills((numberOfSkills -= 1));
    }

    return false;
  }

  for (let i = 0; i < numberOfSkills; i++) {
    skills.push(
      <div className="row" style={{ marginBottom: '1rem' }}>
        <div className="col-sm-8">
          <div className="form-group">
            <label>Skill {i + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="john.hancok@hire.me..."
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Total Years</label>
            <input type="text" className="form-control" placeholder="5..." />
          </div>
        </div>
        <div className=" col-sm-4">
          {numberOfSkills < 6 && (
            <button onClick={handleSkillAmount} className="btn btn-primary">
              <i
                className="nav-icon fas fa-plus"
                style={{ marginRight: '1rem' }}
              ></i>
              Add Skill
            </button>
          )}
          {numberOfSkills > 1 && (
            <button
              onClick={handleSkillRemoval}
              className="btn btn-secondary"
              style={{ margin: '0 1rem' }}
            >
              <i
                className="nav-icon fas fa-trash"
                style={{ marginRight: '1rem' }}
              ></i>
              Remove Skill{''}
            </button>
          )}
        </div>
      </div>,
    );
  }

  return (
    <>
      <h3>About Section</h3>
      <p>
        Edit <strong>About Me</strong> section and <strong>Experience</strong>{' '}
        graph
      </p>
      <div className="card card-success">
        <div className="card-header">
          <h3 className="card-title">About</h3>
        </div>

        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Hancock..."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Profile</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Senior Engineer..."
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="john.hancok@hire.me..."
                  />
                </div>
              </div>
            </div>
            <div
              id="skills"
              className=" row"
              style={{ margin: '0.5rem', padding: '0.5rem' }}
            >
              {skills}
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>About</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Hello! My name is John Hancok..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-form-label" htmlFor="inputSuccess">
                <i className="fas fa-check"></i> Input with success
              </label>
              <input
                type="text"
                className="form-control is-valid"
                id="inputSuccess"
                placeholder="Enter ..."
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputWarning">
                <i className="far fa-bell"></i> Input with warning
              </label>
              <input
                type="text"
                className="form-control is-warning"
                id="inputWarning"
                placeholder="Enter ..."
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="inputError">
                <i className="far fa-times-circle"></i> Input with error
              </label>
              <input
                type="text"
                className="form-control is-invalid"
                id="inputError"
                placeholder="Enter ..."
              />
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Checkbox</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked
                    />
                    <label className="form-check-label">Checkbox checked</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      disabled
                    />
                    <label className="form-check-label">
                      Checkbox disabled
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio1"
                    />
                    <label className="form-check-label">Radio</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio1"
                      checked
                    />
                    <label className="form-check-label">Radio checked</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" disabled />
                    <label className="form-check-label">Radio disabled</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Select</label>
                  <select className="form-control">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Select Disabled</label>
                  <select className="form-control" disabled>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Select Multiple</label>
                  <select multiple className="form-control">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Select Multiple Disabled</label>
                  <select multiple className="form-control" disabled>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutForm;
