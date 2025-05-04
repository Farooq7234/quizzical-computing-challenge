
import React from "react";

interface OptionButtonProps {
  option: string;
  index: number;
  selectedOption: number | null;
  onSelect: (index: number) => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  selectedOption,
  onSelect,
}) => {
  const isSelected = selectedOption === index;

  return (
    <button
      className={`w-full text-left p-4 mb-3 rounded-lg transition-all duration-200 border 
      ${
        isSelected
          ? "bg-purple-600 text-white border-purple-700 shadow-md"
          : "bg-white text-gray-800 border-gray-200 hover:border-purple-300 hover:shadow-sm"
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-6 h-6 mr-3 rounded-full 
          ${
            isSelected
              ? "bg-white text-purple-600"
              : "bg-gray-100 text-gray-600 border border-gray-300"
          }`}
        >
          <span className="text-sm font-medium">
            {String.fromCharCode(65 + index)}
          </span>
        </div>
        <span className="text-md">{option}</span>
      </div>
    </button>
  );
};

export default OptionButton;
