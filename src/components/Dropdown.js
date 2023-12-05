import { useState } from "react";
function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  let content = "Select...";
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  );
}
export default Dropdown;
