
import React from "react";
import { Check } from "lucide-react";

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
      className={`w-full text-left p-4 mb-3 rounded-lg transition-all duration-300 border 
      ${
        isSelected
          ? "bg-primary text-primary-foreground border-primary-foreground shadow-md scale-[1.02]"
          : "bg-card text-card-foreground border-border hover:border-primary/50 hover:shadow-sm dark:hover:border-primary/30"
      }`}
      onClick={() => onSelect(index)}
    >
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-6 h-6 mr-3 rounded-full 
          ${
            isSelected
              ? "bg-primary-foreground text-primary"
              : "bg-muted text-muted-foreground border border-border"
          }`}
        >
          <span className="text-sm font-medium">
            {String.fromCharCode(65 + index)}
          </span>
        </div>
        <span className="text-md">{option}</span>
        {isSelected && (
          <Check 
            className="w-5 h-5 ml-auto text-primary-foreground" 
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
};

export default OptionButton;
