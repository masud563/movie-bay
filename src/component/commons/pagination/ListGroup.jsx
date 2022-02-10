import React from 'react';

const ListGroup = (props) => {
  const {items, onSelectItem, textProperty, valueProperty, selectedItem} = props;
  return (
    <div>
      <ul className='w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 ml-16 mt-16
      overflow-hidden'>
        {items.map(item=> {
          return (
            <li key={item[valueProperty]}><button
            onClick={()=>onSelectItem(item)}
            className={item===selectedItem?'py-2 px-4 w-full border-b border-gray-200 text-white hover:text-xl bg-blue-600':'py-2 px-4 w-full border-b border-gray-200 hover:text-xl'}
            >{item[textProperty]}</button></li>
          );
        } )}
      </ul>
    </div>
  );
};

ListGroup.defaultProps ={
  textProperty: 'name',
  valueProperty: '_id'
};
 
export default ListGroup;