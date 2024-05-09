import { useState, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {
  TinyMCEEditor,
  SkillContent,
  Direction,
  Visibility,
} from '../../types';
import './AboutForm.scss';

interface FormSubmitEvent extends React.FormEvent<HTMLFormElement> {}
interface ClickEvent extends React.MouseEvent<HTMLButtonElement> {}

const AboutForm = () => {
  const skillVisibilitySet: Visibility[] = [
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  const [isVisible, setIsVisible] = useState(skillVisibilitySet);

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

  useEffect(() => {
    // Delay setting isVisible to true to allow for the initial render
    setTimeout(() => {
      setIsVisible([true, false, false, false, false, false]);
    }, 0);
  }, []);

  let [numberOfSkills, setNumberOfSkills] = useState<number>(1);
  let [skillContents, setSkillContents] =
    useState<SkillContent[]>(defaultSkillContents);
  const skills: JSX.Element[] = [];
  const MAX_SKILLS: number = 6;
  const newVisiblity: Visibility[] = [...isVisible];

  const handleSkillAddition = (skillNumber: number) => (event: ClickEvent) => {
    //fade in Skills
    const NEWEST_SKILL: number = numberOfSkills;
    newVisiblity[NEWEST_SKILL] = true;

    if (numberOfSkills <= MAX_SKILLS - 1) {
      setNumberOfSkills((numberOfSkills += 1));
    }
    setTimeout(() => {
      setIsVisible(newVisiblity);
    }, 10);

    event.preventDefault();
  };

  //TODO: Refactor in a way that removes specific skill rather than most recent skill.
  function handleSkillRemoval(event: ClickEvent) {
    if (numberOfSkills > 1) {
      setNumberOfSkills((numberOfSkills -= 1));
      const NEWEST_SKILL: number = numberOfSkills;
      newVisiblity[NEWEST_SKILL] = false;

      setIsVisible(newVisiblity);
    }

    event.preventDefault();
  }

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();
  }

  const handleSKillNameChange =
    (skillNumber: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSkillContents: SkillContent[] = [...skillContents];
      const { value } = event.target;
      newSkillContents[skillNumber].name = value;
      setSkillContents(newSkillContents);
    };

  const handleSKillYearsChange =
    (skillNumber: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSkillContents: SkillContent[] = [...skillContents];
      const { value } = event.target;
      newSkillContents[skillNumber].years = parseInt(value);
      setSkillContents(newSkillContents);
    };

  const handleSKillPositionSwap = (
    skillNumber: number,
    direction: Direction,
  ) => {
    return (_event: React.MouseEvent<HTMLButtonElement>) => {
      const newSkillContents: SkillContent[] = [...skillContents];
      //const { value } = event.target;
      if (direction === 'up') {
        const swappedSkill: SkillContent = newSkillContents[skillNumber - 1];
        newSkillContents[skillNumber - 1] = newSkillContents[skillNumber];
        newSkillContents[skillNumber] = swappedSkill;
      } else if (direction === 'down') {
        const swappedSkill: SkillContent = newSkillContents[skillNumber + 1];
        newSkillContents[skillNumber + 1] = newSkillContents[skillNumber];
        newSkillContents[skillNumber] = swappedSkill;
      }
      setSkillContents(newSkillContents);
    };
  };

  for (let i = 0; i < numberOfSkills; i++) {
    const FIRST_SKILL: number = 0;
    const LAST_SKILL: number = MAX_SKILLS - 1;
    const DISABLE_ADD: boolean = numberOfSkills === MAX_SKILLS;
    const DISABLE_REMOVE: boolean = numberOfSkills <= 1;
    const DISABLE_MOVE_UP: boolean = i === FIRST_SKILL;
    const DISABLE_MOVE_DOWN: boolean = i === LAST_SKILL;
    skills.push(
      <div
        className={`row fade-in ${isVisible[i] ? 'visible' : ''}`}
        style={{
          marginBottom: '1rem',
        }}
      >
        <div className="col-sm-8">
          <div className="form-group">
            <label>Skill {i + 1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="john.hancok@hire.me..."
              value={skillContents[i].name}
              onChange={handleSKillNameChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Total Years</label>
            <input
              type="text"
              className="form-control"
              placeholder="5..."
              value={skillContents[i].years}
              onChange={handleSKillYearsChange(i)}
            />
          </div>
        </div>
        <div className=" col-sm-12">
          <button
            disabled={DISABLE_ADD}
            onClick={handleSkillAddition(i)}
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
            onClick={handleSKillPositionSwap(i, 'up')}
            className={`btn btn-secondary`}
            style={{ margin: '0 1rem' }}
          >
            <i className="nav-icon fas fa-arrow-up"></i>
          </button>
          <button
            disabled={DISABLE_MOVE_DOWN}
            onClick={handleSKillPositionSwap(i, 'down')}
            className={`btn btn-secondary`}
            style={{ margin: '0 1rem' }}
          >
            <i className="nav-icon fas fa-arrow-down"></i>
          </button>
        </div>
      </div>,
    );
  }

  return (
    <>
      <h3 id="about">About Section</h3>
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
