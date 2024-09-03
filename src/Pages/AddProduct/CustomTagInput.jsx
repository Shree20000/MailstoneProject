import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./AddProduct.css";
const CustomTagInput = () => {
  const [tags, setTags] = useState([]); // State for tags
  const [inputValue, setInputValue] = useState(""); // State for input value

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value state
  };

  // Handle input key down (adding tag on Enter)
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault(); // Prevent form submission if inside a form
      setTags([...tags, inputValue.trim()]); // Add new tag
      setInputValue(""); // Clear input field
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove)); // Filter out tag by index
  };

  return (
    <div
      className="flex items-center gap-2 p-2 border rounded-md overflow-x-auto"
      style={{
        borderRadius: "8px",
        flexWrap: "nowrap", // Prevent wrapping
      }}
    >
      {tags.map((tag, index) => (
        <span
          key={index}
          className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm"
        >
          {tag}

          <RxCross2 onClick={() => removeTag(index)} className="x-btn" />
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
        className="text-field"
        style={{ minWidth: "100px" }}
      />
    </div>
  );
};

export default CustomTagInput;
