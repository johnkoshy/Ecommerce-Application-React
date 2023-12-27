import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, 
Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid, contextMenuItems, 
ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    // here md:m-10 is for medium devices(md) set margin to 10
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white 
    rounder-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent      
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
        {employeesGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees