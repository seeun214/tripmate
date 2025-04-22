import React, { useState, useCallback } from "react";

interface TabItem {
  label: string;
  condition?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  selectedLabel: string;
  onChange: (label: string) => void;
  className?: string;
}

export const Tabs = ({
  tabs,
  selectedLabel,
  onChange,
  className,
}: TabsProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex border-b border-gray-300"></div>
    </div>
  );
};
