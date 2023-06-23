import "./SearchBar.css";
function Search(props) {
  console.log(props);
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="searchbar"
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </div>
  );
}
export default Search;
