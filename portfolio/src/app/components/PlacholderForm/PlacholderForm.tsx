import { array, number } from 'prop-types';
import { useState } from 'react';

const AboutForm = () => {
  let [numberOfSkills, setNumberOfSkills] = useState(1);
  const skills = [];
  const MAX_SKILLS = 6;

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
    const DISABLE_ADD = numberOfSkills === MAX_SKILLS;
    const DISABLE_REMOVE = numberOfSkills <= 1;
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
          <button
            disabled={DISABLE_ADD}
            onClick={handleSkillAmount}
            className={`btn btn-primary`}
          >
            <i
              className="nav-icon fas fa-plus"
              style={{ marginRight: '1rem' }}
            ></i>
            Add Skill
          </button>

          <button
            disabled={DISABLE_REMOVE}
            onClick={handleSkillRemoval}
            className={`btn btn-primary`}
            style={{ margin: '0 1rem' }}
          >
            <i
              className="nav-icon fas fa-trash"
              style={{ marginRight: '1rem' }}
            ></i>
            Remove Skill{''}
          </button>
        </div>
      </div>,
    );
  }

  return (
    <>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Placholder for now</h3>
        </div>

        <div className="card-body">
          <form>
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
