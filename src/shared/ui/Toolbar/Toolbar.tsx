import React from 'react';
import './Toolbar.css';

interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`toolbar-button ${selected === filter ? 'active' : ''}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
