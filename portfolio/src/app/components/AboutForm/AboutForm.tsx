import { array, number } from 'prop-types';
import { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TinyMCEEditor, SkillContent } from '../../types';

interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}
interface ClickEvent extends React.MouseEvent<HTMLButtonElement> {}

const AboutForm = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const defaultSkillContents: SkillContent[] = [
    {
      name: `Placeholder 1`,
      years: 10,
    },
    {
      name: `Placeholder 2`,
      years: 10,
    },
    {
      name: `Placeholder 3`,
      years: 10,
    },
    {
      name: `Placeholder 4`,
      years: 10,
    },
    {
      name: `Placeholder 5`,
      years: 10,
    },
    {
      name: `Placeholder 6`,
      years: 10,
    },
  ];

  let [numberOfSkills, setNumberOfSkills] = useState<number>(1);
  let [skillContents, setSkillContents] =
    useState<SkillContent[]>(defaultSkillContents);
  const skills: JSX.Element[] = [];

  const MAX_SKILLS: number = 6;

  function handleSkillAmount(event: ClickEvent) {
    if (numberOfSkills <= MAX_SKILLS - 1) {
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
    const FIRST_SKILL = 0;
    const LAST_SKILL = MAX_SKILLS - 1;
    const DISABLE_ADD = numberOfSkills === MAX_SKILLS;
    const DISABLE_REMOVE = numberOfSkills <= 1;
    const DISABLE_MOVE_UP = i === FIRST_SKILL;
    const DISABLE_MOVE_DOWN = i === LAST_SKILL;
    skills.push(
      <div className="row" style={{ marginBottom: '1rem' }}>
        <div className="col-sm-8">
          <div className="form-group">
            <label>Skill {i + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="john.hancok@hire.me..."
              value={skillContents[i].name}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Total Years</label>
            <input type="text" className="form-control" placeholder="5..." />
          </div>
        </div>
        <div className=" col-sm-12">
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
          <button
            disabled={DISABLE_MOVE_UP}
            onClick={handleSkillRemoval}
            className={`btn btn-secondary`}
            style={{ margin: '0 1rem' }}
          >
            <i
              className="nav-icon fas fa-arrow-up"
              //style={{ marginRight: '1rem' }}
            ></i>
          </button>
          <button
            disabled={DISABLE_MOVE_DOWN}
            onClick={handleSkillRemoval}
            className={`btn btn-secondary`}
            style={{ margin: '0 1rem' }}
          >
            <i
              className="nav-icon fas fa-arrow-down"
              // style={{ marginRight: '1rem' }}
            ></i>
          </button>
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
      <div className="card card-info">
        <div className="card-header">
          <h3 className="card-title">About</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Years of Expirence</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="10..."
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
                  <Editor
                    apiKey="34wnvd1nhdnxv30pwsu0d0syqerzodcjicuf8hrgn7c7uymk"
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue="My Duties for the job included..."
                    init={{
                      height: 500,
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
