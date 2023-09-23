
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

function TokenPrice() {

    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: "Name",
          dataIndex: "name",
          width: 150,
        },
        {
          title: "Age",
          dataIndex: "age",
          width: 150,
        },
        {
          title: "Address",
          dataIndex: "address",
          width: 150,
        },
      ];
      
      const data: DataType[] = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }

      
      return (
    
        <div className="flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
          <Head>
            <title>Morning Moon Village Calculator</title>
          </Head>   
          <Navbar />
    <div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 900 }} />
    </div>
    </div>
  );
}

export default TokenPrice;
