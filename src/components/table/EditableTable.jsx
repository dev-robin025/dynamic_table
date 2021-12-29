import React, { useEffect, useState } from 'react';
import EditableRow from './utils/EditableRow';
import axios from 'axios';

export default function EditableTable() {
  const [tableData, setTableData] = useState([]);
  const [newRowData, setNewRowData] = useState({});
  const [inEditMode, setInEditMode] = useState({ status: false, row: null, index: 1 });

  const loadUsers = async () => {
    const { data } = await axios.get('/api/v1/users');
    console.log(data);
    setTableData([...data.users, { name: '', phone: '', city: '' }]);
  };

  const handleAddNewRow = async payload => {
    try {
      if (payload.name && payload.phone) {
        const { data } = await axios.post('/api/v1/add/user', payload);
        alert(data);
      }
      loadUsers();
      setNewRowData();
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdateRow = async (id, payload) => {
    try {
      const { data } = await axios.put(`/api/v1/update/${id}`, payload);
      alert(data);
      loadUsers();
      setInEditMode({ status: false, row: null, index: NaN });
    } catch (error) {
      alert(error);
    }
  };

  const handleDeleteRow = async id => {
    try {
      const { data } = await axios.delete(`/api/v1/delete/${id}`);
      alert(data);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleChange = e => {
    setNewRowData({ ...newRowData, [e.target.name]: e.target.value });
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => {
          return inEditMode.status && inEditMode.row._id === item._id ? (
            <EditableRow
              key={index}
              data={inEditMode}
              setInEditMode={setInEditMode}
              handleUpdateRow={handleUpdateRow}
            />
          ) : (
            <tr key={index}>
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
                  item.phone
                ) : (
                  <input name='phone' placeholder='Input user phone' onChange={handleChange} />
                )}
              </td>
              <td>
                {item.city ? (
                  item.city
                ) : (
                  <input name='city' placeholder='Input user city' onChange={handleChange} />
                )}
              </td>
              <td>
                {item.name && item.phone ? (
                  <>
                    <button
                      type='button'
                      onClick={() => setInEditMode({ status: true, row: item, index: index + 1 })}
                    >
                      Edit
                    </button>
                    <button type='button' onClick={() => handleDeleteRow(item._id)}>
                      Delete
                    </button>
                  </>
                ) : (
                  <button type='button' onClick={() => handleAddNewRow(newRowData)}>
                    Save
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
