import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/Filters";

const Filters = () => {
  const {
    all_products,
    clearFilters,
    updateFilters,
    filters: {
      text,
      company,
      category,
      color,
      min_price,
      max_price,
      price,
      isShipping,
    },
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
        </form>
      </div>
    </Wrapper>
  );
};

export default Filters;
