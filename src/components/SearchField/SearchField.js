import "./SearchField.css";

const SearchField = ({ input, setInput }) => {
  return (
    <label className="search">
      <span className="search__icon"></span>
      <input
        className="search__field"
        type="text"
        placeholder="item..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </label>
  );
};

export default SearchField;
