import React from 'react';

function FormElement(x) {
  return (
    <div className='form-group'>
      <label htmlFor="id">{x.name}</label>
      <input
        type={x.type}
        name={x.inputname}
        placeholder={x.placeholder}
        id={x.id}
        className={x.className}
        // value={x.value}
        onChange={x.changeHandler}
      />
      <span>{x.error}</span>
    </div>
  );
}

export default FormElement;