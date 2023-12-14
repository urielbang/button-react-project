import { useState } from "react";
import { GoFoldUp, GoFoldDown } from "react-icons/go";
function useSort(data, config) {
  const [sortOrder, setSortedOrder] = useState(null);

  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortedOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortedOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortedOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortedOrder(null);
      setSortBy(null);
    }
  };

  //only sort datat if sortOrder && srtBy are not null
  // make a copy of the 'data' prop
  //find the correct sortValue function use it for

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoFoldUp />
          <GoFoldDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <GoFoldUp />
          <GoFoldDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoFoldUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoFoldDown />
        </div>
      );
    }
  }
  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
    getIcons,
  };
}
export default useSort;
