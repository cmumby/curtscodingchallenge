import './DropDownSelector.css';
import { DropDownSelectorProps } from '../../interfaces';
import uniqid from 'uniqid';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Dropdown Selector that will look an function the same on all browsers
const DropDownSelector = ({ options }: DropDownSelectorProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | number>('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleActiveToggle = () => {
    setIsActive(!isActive);
  };

  // Ensures that when the user clicks anywhere outisde of the dropdown the box closes
  const handleActiveToggleOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  const handleOptionSelect = (value: string | number) => () => {
    setSelectedValue(value);
  };

  const dropdownOptions: ReactNode = options.map(item => (
    <li key={uniqid()} role="option" data-value={item.value} onClick={handleOptionSelect(item.value)}>
      {item.label}
    </li>
  ));

  useEffect(() => {
    // adding events that will make it act like a native dropdown. accouinting for clicks out side of the component
    if (isActive) {
      document.addEventListener('mousedown', handleActiveToggleOutside);
    } else {
      document.removeEventListener('mousedown', handleActiveToggleOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleActiveToggleOutside);
    };
  }, [isActive]);

  useEffect(() => {
    if (selectedValue !== '') {
      navigate(`/posts/${selectedValue}`);
    }
  }, [selectedValue, navigate]);

  const getLabelByValue = (value: string): string | undefined => {
    const item = options.find(item => item.value === value);
    return item ? item.label : undefined;
  };

  const buttonLabel = selectedValue !== '' ? getLabelByValue(selectedValue as string) : 'Select a Post';
  return (
    <div className={`custom-select ${isActive ? 'active' : ''}`} ref={dropdownRef} data-value={selectedValue}>
      <button className="select-button" role="combobox" onClick={handleActiveToggle}>
        <span className="selected-value">{buttonLabel}</span>
        <span className="arrow"></span>
      </button>
      <ul className="select-dropdown" role="listbox" id="select-dropdown">
        {dropdownOptions}
      </ul>
    </div>
  );
};

export default DropDownSelector;
