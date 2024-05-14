import { array, number } from 'prop-types';
import { useState, useRef, RefObject } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { TinyMCEEditor, Direction, ExperienceContent } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import {
  FormSubmitEvent,
  ClickEvent,
  SelectChangeEvent,
  InputChangeEvent,
} from '../../interfaces';

const defaultExperienceContents: ExperienceContent[] = [];

for (let i = 0; i < 9; i++) {
  defaultExperienceContents.push({
    name: '',
    title: '',
    type: 'Full-time',
    startingYear: 2024,
    endingYear: 2024,
    currentEmployer: false,
    location: '',
    skillsList: '',
    description: '',
  });
}

const ExperienceForm = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  let [experienceContents, setExperienceContents] = useState<
    ExperienceContent[]
  >(defaultExperienceContents);
  let [numberOfExperiences, setNumberOfExperiences] = useState<number>(1);
  const skills: JSX.Element[] = [];
  const MAX_EMPLOYERS: number = 10;

  function handleExperienceAmount(event: ClickEvent) {
    if (numberOfExperiences <= MAX_EMPLOYERS - 1) {
      setNumberOfExperiences((numberOfExperiences += 1));
    }
    event.preventDefault();
  }

  function handleExperienceRemoval(event: ClickEvent) {
    event.preventDefault();
    if (numberOfExperiences > 1) {
      setNumberOfExperiences((numberOfExperiences -= 1));
    }
  }

  const handleExperiencePositionSwap = (
    skillNumber: number,
    direction: Direction,
  ) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const newExperienceContents: ExperienceContent[] = [
        ...experienceContents,
      ];

      console.log('reached swap', event);

      if (direction === 'up') {
        const swappedExperience: ExperienceContent =
          newExperienceContents[skillNumber - 1];
        newExperienceContents[skillNumber - 1] =
          newExperienceContents[skillNumber];
        newExperienceContents[skillNumber] = swappedExperience;
      } else if (direction === 'down') {
        const swappedExperience: ExperienceContent =
          newExperienceContents[skillNumber + 1];
        newExperienceContents[skillNumber + 1] =
          newExperienceContents[skillNumber];
        newExperienceContents[skillNumber] = swappedExperience;
      }
      setExperienceContents(newExperienceContents);
    };
  };

  const handleChange =
    (experienceNumber: number) =>
    (event: InputChangeEvent | SelectChangeEvent) => {
      const newExperienceContents: ExperienceContent[] = [
        ...experienceContents,
      ];
      const { name, value } = event.target;
      newExperienceContents[experienceNumber] = {
        ...newExperienceContents[experienceNumber],
        [name as keyof ExperienceContent]: value,
      };
      setExperienceContents(newExperienceContents);
    };

  const handleEditorChange =
    (i: number) => (event: any, editor: Editor | any) => {
      const newExperienceContents: ExperienceContent[] = [
        ...experienceContents,
      ];
      if (editorRef.current) {
        const newContent = editorRef.current.getContent();
        newExperienceContents[i].description = newContent;
        setExperienceContents(newExperienceContents);
      }
    };

  function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();
  }

  for (let i = 0; i < numberOfExperiences; i++) {
    const FIRST_EMPLOYER: number = 0;
    const LAST_EMPLOYER = MAX_EMPLOYERS - 1;
    const DISABLE_ADD = numberOfExperiences === MAX_EMPLOYERS;
    const DISABLE_REMOVE = numberOfExperiences <= 1;
    const DISABLE_MOVE_UP: boolean = i === FIRST_EMPLOYER;
    const DISABLE_MOVE_DOWN: boolean = i === LAST_EMPLOYER;
    skills.push(
      <div
        key={uuidv4()}
        className="row"
        style={{
          paddingBottom: '1rem',
          marginBottom: '1rem',
          borderBottom: '1.5px solid #dee2e6',
        }}
      >
        <div className="col-sm-12">
          <div className="form-group">
            <label>Employer {i + 1}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Acme Labs..."
              value={experienceContents[i].name}
              onChange={handleChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="5..."
              value={experienceContents[i].title}
              onChange={handleChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-2">
          <div className="form-group">
            <label>Employment Type</label>
            <select
              className="form-control"
              name="type"
              value={experienceContents[i].type}
              onChange={handleChange(i)}
            >
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
            <input
              type="text"
              className="form-control"
              placeholder="2015.."
              name="startingYear"
              value={experienceContents[i].startingYear}
              onChange={handleChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-5">
          <label>Ending Year</label>
          <input
            type="text"
            className="form-control"
            placeholder="2023.."
            name="endingYear"
            value={experienceContents[i].endingYear}
            onChange={handleChange(i)}
          />
        </div>
        <div
          className="col-sm-12 form-check"
          style={{ paddingLeft: '2.5rem', paddingBottom: '1rem' }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            name="currentEmployer"
            checked={experienceContents[i].currentEmployer}
            onChange={handleChange(i)}
          />
          <label className="form-check-label">Current Empoyer</label>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Boise, Idaho.."
              name="location"
              value={experienceContents[i].location}
              onChange={handleChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Experiences / Technologies</label>
            <input
              type="text"
              className="form-control"
              placeholder="HTML, CSS, Javascript..."
              name="skillsList"
              value={experienceContents[i].skillsList}
              onChange={handleChange(i)}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group">
            <label>Job Description</label>
            <Editor
              apiKey="34wnvd1nhdnxv30pwsu0d0syqerzodcjicuf8hrgn7c7uymk"
              onInit={(_evt, editor) => (editorRef.current = editor)}
              onChange={handleEditorChange(i)}
              value={experienceContents[i].description}
              init={{
                height: 200,
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
        <div className=" col-sm-12">
          <button
            disabled={DISABLE_ADD}
            onClick={handleExperienceAmount}
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
            onClick={handleExperienceRemoval}
            className={`btn btn-primary`}
            style={{ margin: '0 1rem' }}
          >
            <i
              className="nav-icon fas fa-trash"
              style={{ marginRight: '1rem' }}
            ></i>
            Remove Employer{''}
          </button>
          <button
            disabled={DISABLE_MOVE_UP}
            onClick={handleExperiencePositionSwap(i, 'up')}
            className={`btn btn-secondary`}
            style={{ margin: '0 1rem' }}
          >
            <i className="nav-icon fas fa-arrow-up"></i>
          </button>
          <button
            disabled={DISABLE_MOVE_DOWN}
            onClick={handleExperiencePositionSwap(i, 'down')}
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
      <h3 id="experience">Experience Section</h3>
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
