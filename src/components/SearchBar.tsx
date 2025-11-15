import React from 'react';
import { IonSearchbar } from '@ionic/react';
import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onSearchChange, placeholder = "Buscar productos..." }) => {
  return (
    <div className="search-bar-container">
      <IonSearchbar
        value={value}
        onIonInput={(e) => onSearchChange(e.detail.value || '')}
        placeholder={placeholder}
        debounce={300}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;

