import React from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'

function AppDataTable({ columns, data, loading }) {
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ position: ['none'] }}
      />
    </>
  )
}

export default AppDataTable
