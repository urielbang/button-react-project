import Table from "./Table";
import { useState } from "react";
function SortableTable(props) {
  const [sortOrder, setSortedOrder] = useState(null);

  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {column.label} IS Soratble
        </th>
      ),
    };
  });

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
  return (
    <div>
      {sortOrder} - {sortBy}{" "}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}
export default SortableTable;
