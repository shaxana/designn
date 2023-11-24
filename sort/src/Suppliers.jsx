import React, { useMemo, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { memo } from 'react';
function Suppliers() {
    let [suppliers, setSuppliers] = useState([])
    useMemo(() => axios("https://northwind.vercel.app/api/suppliers").then((res) => {
        setSuppliers(res.data)

    }), [suppliers])
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Company name',
            dataIndex: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName),
        },
        {
            title: 'City',
            dataIndex: ['address', 'city'],
            filters: suppliers.map((sup) => {
            return {
                text: sup.address?.city,
                value: sup.address?.city,
            }
        })
  
            
          ,
    onFilter: (value, record) => record?.address?.city?.indexOf(value) === 0,
        filterSearch: true,
            width: '40%',
        },
      ];

//       {
//         suppliers && suppliers.map((supplier)=>{
//  return {
//           key: `${supplier.id}`,
//           id: `${supplier.id}`,
//           companyName: `${supplier.companyName}`,
//           city: `${supplier.address.city}`,
//         }
//         })
//       }


;
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

return (
    <Table columns={columns} dataSource={suppliers} onChange={onChange} />
)
    }
export default Suppliers;