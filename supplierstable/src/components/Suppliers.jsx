import React, { useEffect, useState } from 'react';
import { Button, Input, Table } from 'antd';
import { Form } from 'antd';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Modal } from 'antd';

function Suppliers() {
    // {
    //     title: "Add",
    //     render: (text, record) => (
    //         <Button

    //             type="primary"
    //             onClick={()=>{
    //                 axios.post("https://northwind.vercel.app/api/suppliers/", suppliers).then((res)=>{
                        
    //                 })
    //             }}
    //         >
    //             {"Add"}
    //         </Button>
    //     ),
    // },

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    let [suppliers, setSuppliers] = useState([])
    let [edit, setEdit] = useState([{}])
    const {companyName,contactTitle} = suppliers
    useEffect(() => {
        axios("https://northwind.vercel.app/api/suppliers").then((res) => {
            setSuppliers(res.data)

        })
    }, [])
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
            title: 'Contact title',
            dataIndex: 'contactTitle',
            filters: suppliers.map((sup) => {
                return {
                    text: sup.contactTitle,
                    value: sup.contactTitle,
                }
            }),



            onFilter: (value, record) => record?.contactTitle.indexOf(value) === 0,
            filterSearch: true,
            width: '40%',
        },
        {
            title: "Delete",
            render: (text, record) => (
                <Button

                    type="primary"
                    danger
                    onClick={() => {

                        Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                axios.delete(`https://northwind.vercel.app/api/suppliers/${record.id}`,);
                                setSuppliers((suppliers) =>
                                    suppliers.filter((x) => x.id !== record.id)
                                );
                            }
                        });
                    }}
                >
                    {"Delete"}
                </Button>
            ),
        },
        {
            title: "Edit",
            render: (text, record) => {
             return (
                <>
                <Button  type="primary" onClick={()=>{
                    showModal()
                }}>{"Edit"}</Button>
                     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input placeholder='companyName' name="companyName" value={companyName} onChange={(e)=>{
            
       
            setEdit([{
                companyName: e.target.value
            }])
        }}>companyName</input>
        <input placeholder='contactTitle' name="contactTitle" value={contactTitle} onChange={(e)=>{
            
           
            setEdit([{
                contactTitle: e.target.value
            }])
            }}></input>
        
      </Modal>
                </>
             )
            },
        }
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <Table columns={columns} dataSource={suppliers} onChange={onChange} rowKey={(record) => record.id} />
    )
}
export default Suppliers;