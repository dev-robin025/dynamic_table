import React from 'react';

export default function EditableRow({ data, setInEditMode }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <input type='text' defaultValue={data.name} />
      </td>
      <td>
        <input type='text' defaultValue={data.phone} />
      </td>
      <td>
        <input type='text' defaultValue={data.address.city} />
      </td>
      <td>
        <button type="button">Save</button>
        <button onClick={() => setInEditMode({ status: false, row: null })}> Cancel</button>
      </td>
    </tr>
  );
}
