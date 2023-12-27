import { Typography } from 'antd'
import React from 'react'

export const Title = ({ children, level, editable, style, color  }) => {
    return (
        <Typography.Title 
        level={level}
        editable={editable}
        style={style}
        color={color}
        >
            {children}
        </Typography.Title>
    )
}
