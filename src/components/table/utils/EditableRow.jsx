import axios from 'axios';
import React, { useState } from 'react';

export default function EditableRow({ data, setInEditMode, handleUpdateRow }) {
  const [updateData, setUpdateData] = useState({});
  const { row, index } = data;

  // const handleUpdateRow = async id => {
  //   try {
  //     const res = await axios.put(`/api/v1/update/${id}`, updateData);
  //     alert(res.data);
  //     setInEditMode({ status: false, row: null, index: NaN });
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <tr>
      <td>{index}</td>
      <td>
        <input
          type='text'
          defaultValue={row.name}
          onChange={e => setUpdateData({ ...updateData, name: e.target.value })}
        />
      </td>
      <td>
        <input
          type='text'
          defaultValue={row.phone}
          onChange={e => setUpdateData({ ...updateData, phone: e.target.value })}
        />
      </td>
      <td>
        <input
          type='text'
          defaultValue={row.city}
          onChange={e => setUpdateData({ ...updateData, city: e.target.value })}
        />
      </td>
      <td>
        <button type='button' onClick={() => handleUpdateRow(row._id, updateData)}>
          Save
        </button>
        <button onClick={() => setInEditMode({ status: false, row: null, index: NaN })}>
          Cancel
        </button>
      </td>
    </tr>
  );
}
