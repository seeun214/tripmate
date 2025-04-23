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
      {options.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 text-lg font-bold border-b-2 ${
            selectedCategory === cat
              ? "border-gray-500 font-bold text-gray-900"
              : "border-transparent text-gray-500"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
