import React, { useEffect, useState } from "react";
import Select from "./Base/Select";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const options = ["Soccer", "Basketball", "Baseball"];

  const [selectedFilter, setSelectedFilter] = useState<string>("");

  useEffect(() => {
    onFilterChange(selectedFilter);
  }, [selectedFilter, onFilterChange]);

  return (
    <Select
      onChange={(e) => setSelectedFilter(e)}
      options={options}
      value={selectedFilter}
    />
  );
};

export default Filters;
