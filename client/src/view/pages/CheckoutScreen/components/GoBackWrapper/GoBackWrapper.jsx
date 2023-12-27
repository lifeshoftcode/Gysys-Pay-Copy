import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'

export const GoBackWrapper = ({
    onClick
}) => {
  
  return (
    <div>
        <Button icon={<ArrowLeftOutlined />} onClick={onClick} >
            Volver
        </Button>
     
        </div>
  )
}
