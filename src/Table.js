import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortTable, filterTable, setPage } from './TableActions';

const Table = () => {
  const dispatch = useDispatch();
  const { data, sortedBy, filteredBy, page, itemsPerPage } = useSelector((state) => state);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (key) => {
    dispatch(sortTable(key));
  };

  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
    dispatch(filterTable(event.target.value));
    dispatch(setPage(1));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const sortedData = data.sort((a, b) => {
    if (a[sortedBy.key] < b[sortedBy.key]) {
      return sortedBy.direction === 'asc' ? -1 : 1;
    }
    if (a[sortedBy.key] > b[sortedBy.key]) {
      return sortedBy.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) => {
    return (
      item.name.toLowerCase().includes(filteredBy.toLowerCase()) ||
      item.email.toLowerCase().includes(filteredBy.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const displayedData = filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Name {sortedBy.key === 'name' && <span>{sortedBy.direction === 'asc' ? '▲' : '▼'}</span>}
            </th>
            <th onClick={() => handleSort('email')}>
              Email {sortedBy.key === 'email' && <span>{sortedBy.direction === 'asc' ? '▲' : '▼'}</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
