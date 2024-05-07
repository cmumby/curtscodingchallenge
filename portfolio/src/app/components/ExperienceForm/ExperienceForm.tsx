import { array, number } from 'prop-types';
import { useState, useRef, RefObject } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TinyMCEEditor } from '../../types';

interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}
interface ClickEvent extends React.MouseEvent<HTMLButtonElement> {}

const ExperienceForm = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  let [numberOfSkills, setNumberOfSkills] = useState<number>(1);
  const skills: JSX.Element[] = [];
  const MAX_EMPLOYERS: number = 10;

  function handleSkillAmount(event: ClickEvent) {
    if (numberOfSkills <= MAX_EMPLOYERS - 1) {
      setNumberOfSkills((numberOfSkills += 1));
    }
    event.preventDefault();
  }

  function handleSkillRemoval(event: ClickEvent) {
    event.preventDefault();
    if (numberOfSkills > 1) {
      setNumberOfSkills((numberOfSkills -= 1));
    }
  }

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();
  }

  for (let i = 0; i < numberOfSkills; i++) {
    const DISABLE_ADD = numberOfSkills === MAX_EMPLOYERS;
    const DISABLE_REMOVE = numberOfSkills <= 1;
    skills.push(
      <div className="row" style={{ marginBottom: '1rem' }}>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Employer {i + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Acme Labs..."
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="5..." />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <label>Employment Type</label>
            <select className="form-control">
              <option disabled>Select Employment type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="form-group">
            <label>Starting Year</label>
            <input type="text" className="form-control" placeholder="2015.." />
          </div>
        </div>
        <div className="col-sm-5">
          <label>Ending Year</label>
          <input type="text" className="form-control" placeholder="2023.." />
        </div>
        <div
          className="col-sm-12 form-check"
          style={{ paddingLeft: '2.5rem', paddingBottom: '1rem' }}
        >
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label">Current Empoyer</label>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Boise, Idaho.."
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Skills / Technologies</label>
            <input
              type="text"
              className="form-control"
              placeholder="HTML, CSS, Javascript..."
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Job Description</label>
            <Editor
              apiKey="34wnvd1nhdnxv30pwsu0d0syqerzodcjicuf8hrgn7c7uymk"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              initialValue="My Duties for the job included..."
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  'advlist',
                  'autolink',
                  'lists',
                  'link',
                  'image',
                  'charmap',
                  'preview',
                  'anchor',
                  'searchreplace',
                  'visualblocks',
                  'code',
                  'fullscreen',
                  'insertdatetime',
                  'media',
                  'table',
                  'code',
                  'help',
                  'wordcount',
                ],
                toolbar:
                  'undo redo | blocks | ' +
                  'bold italic forecolor | ' +
                  /* 'bold italic forecolor | alignleft aligncenter ' + */
                  /* 'alignright alignjustify | bullist numlist outdent indent | ' + */
                  'removeformat | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
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
            Add Employer
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
            Remove Employer{''}
          </button>
        </div>
      </div>,
    );
  }

  return (
    <>
      <h3>Experience Section</h3>
      <p>
        Edit <strong>Experience</strong> section.{' '}
        <strong>Add and remove</strong> Employers
      </p>
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Experience</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div
              id="skills"
              className=" row"
              style={{ margin: '0.5rem', padding: '0.5rem' }}
            >
              {skills}
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

export default ExperienceForm;
