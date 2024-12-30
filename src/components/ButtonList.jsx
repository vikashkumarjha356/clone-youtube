import React from 'react'
import Button from './Button'
import { cacheResults, globalSearchQuery } from '../utils/searchSlice'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
const list = ['All', 'Game', 'Songs', 'Live', 'Indian National Cricket', 'Dombledore', 'Physics', 'Mixes', 'Wizarding world', 'Soccer', 'News', 'Cooking', 'Music', 'Valentines']

const ButtonList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fetchSearchedVideos = (item) => {
        navigate('/')
        dispatch(globalSearchQuery(item))

    }

    return (
        <div className='flex px-5'>
            {list.map((item, index) => <Button key={index} name={item} onClick={fetchSearchedVideos} />)}
        </div>
    )
}

export default ButtonList