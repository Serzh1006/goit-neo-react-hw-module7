import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./searchbox.module.css";

const SearchBox = () => {
  const filterName = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <div className={css.wrapFilter}>
      <label>
        Find contacts by name
        <input
          className={css.filterText}
          type="text"
          value={filterName.filter}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
