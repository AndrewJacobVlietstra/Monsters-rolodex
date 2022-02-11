import "./SearchField.css";

const SearchField = ({ handleChange, searchPlaceholder }) => {
  return (
    <input
      type="search"
      className="monster-search"
      placeholder={searchPlaceholder}
      onChange={handleChange}
    />
  );
};

export default SearchField;
