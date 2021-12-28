import React, { useEffect, useState } from 'react';
import EditableRow from './utils/EditableRow';

export default function EditableTable() {
  const [tableData, setTableData] = useState([]);
  const [inEditMode, setInEditMode] = useState({ status: false, row: null });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        setTableData([
          ...users,
          {
            id: users.length + 1,
            name: '',
            phone: '',
            address: { city: '' },
          },
        ]),
      );
    fetch('http://localhost:8000/users').then(response =>
      response.json().then(res => console.log(res)),
    );
  }, []);

  const handleChange = e => {
    const updatingData = tableData[tableData.length - 1];
    updatingData[e.target.name] = e.target.value;
  };

  return (
    <form>
      <table className='table'>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Operations</th>
        </tr>
        {tableData.map((item, index) => {
          return inEditMode.status && inEditMode.row.id === item.id ? (
            <EditableRow data={inEditMode.row} setInEditMode={setInEditMode} />
          ) : (
            <tr key={item?.id}>
              <td>{index + 1}</td>
              <td>
                {item.name ? (
                  item.name
                ) : (
                  <input name='name' placeholder='Input user name' onChange={handleChange} />
                )}
              </td>
              <td>
                {item.phone ? (
                  item.name
                ) : (
                  <input name='phone' placeholder='Input user phone' onChange={handleChange} />
                )}
              </td>
              <td>
                {item.address.city ? (
                  item.address.city
                ) : (
                  <input name='city' placeholder='Input user city' onChange={handleChange} />
                )}
              </td>
              <td>
                {item.name && item.phone ? (
                  <>
                    <button
                      type='button'
                      onClick={() => setInEditMode({ status: true, row: item })}
                    >
                      Edit
                    </button>
                    <button type='button'>Delete</button>
                  </>
                ) : (
                  <button type='button' onClick={() => console.log(tableData)}>
                    Save
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </form>
  );
}
