import React from 'react';

type SearchBarProps = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ className, onChange }) => (
  <input
    className={className}
    type="text"
    placeholder="Rechercher"
    onChange={onChange}
  />
);

export default SearchBar;
