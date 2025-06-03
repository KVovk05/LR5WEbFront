
const Filter = ({ onChangeCategory }) => {
  return (
      <div className="filter">
          <button onClick = {e=>onChangeCategory("all")}>All</button>
          <button onClick = {e=>onChangeCategory("Ecology")}>Ecology</button>
          <button onClick = {e=>onChangeCategory("Social help")}>Social help</button>
          
    </div>
  );
}
export default Filter;