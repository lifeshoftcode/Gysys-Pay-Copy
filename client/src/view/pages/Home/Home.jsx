import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/cart/view/1')
    }, [])
    return (
        <div></div>
    )
}
