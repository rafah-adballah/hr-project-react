import _ from "lodash";

const Table = ({ data, columns }) => {
  const renderCell = (item, col) => {
    if (col.content) return col.content(item);
    return _.get(item, col.path);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th scope="col" key={col.path}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => {
              console.log(col);
              return <td>{renderCell(item, col)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
