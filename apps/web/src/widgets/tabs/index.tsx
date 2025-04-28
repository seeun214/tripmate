import React from "react";

interface TabsProps {
  options: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export const Tabs = ({
  options,
  selectedCategory,
  onSelect,
  className = "",
}: TabsProps) => {
  return (
    <div className={`flex space-x-4 px-3 py-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`px-3 py-1 text-lg font-bold border-b-2 ${
            selectedCategory === option
              ? "border-gray-500 font-bold text-gray-900"
              : "border-transparent text-gray-500"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
