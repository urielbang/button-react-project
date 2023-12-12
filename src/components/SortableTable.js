import Table from "./Table";
import { useState } from "react";
import { GoFoldUp, GoFoldDown } from "react-icons/go";
function SortableTable(props) {
  const [sortOrder, setSortedOrder] = useState(null);

  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
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
  return <Table {...props} data={sortedData} config={updatedConfig} />;
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
export default SortableTable;
