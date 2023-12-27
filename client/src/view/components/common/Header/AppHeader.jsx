import { Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
const { Text, Title, Link } = Typography;
export const AppHeader = () => {
  return (
    <div>
  
      <Header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0f0f0f",
        height: "10vh",
        color: "white",
      
      }} >
       <span style={{color: "white", fontSize: "1.5em", fontWeight: "Bold"}}>
        GYSYS <span style={{color: "#5ec0ee"}}>PAY</span>
       </span>
       <Text style={{color: "white"}}>
       
        +1 849 206 0000 |  <Link>sales@gysys.com</Link>
       </Text>
      </Header>
     
    </div>
  )
}
