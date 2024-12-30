import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants'
import { cacheResults, globalSearchQuery } from '../utils/searchSlice'
import { useNavigate } from 'react-router-dom'
const Head = () => {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(state => state.search)
    useEffect(() => {
        // make an api call after every keypress
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            }

            else {
                getSearchSuggestions();
            }

        }, 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])


    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const fetchSearchedVideos = (item) => {
        navigate('/')
        dispatch(globalSearchQuery(item))

    }

    const getSearchSuggestions = async () => {
        console.log(suggestions);
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)}`);
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);
        setSuggestions(parsedData[1]);

        dispatch(cacheResults({
            [searchQuery]: parsedData[1]
        }))

    }

    return (
        <div className='grid grid-flow-col p-6  sticky top-0 bg-white z-50'>
            <div className='flex col-span-1'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png" alt="menu" />
                <img className='h-8 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg" alt="logo" />
            </div>
            <div className='col-span-10 px-10'>
                <div>
                    <input
                        type="text"
                        className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button
                        className='border border-gray-400 py-2 px-3 rounded-r-full bg-gray-100'
                        onClick={() => fetchSearchedVideos(searchQuery)}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                {showSuggestions && (
                    <div className='fixed bg-white my-1 py-2 px-2 w-[47rem] shadow-lg rounded-lg border border-gray-100'>
                        <ul>
                            {
                                suggestions.map((item, index) => (
                                    <li key={index} className='py-2 px-3 shadow-sm hover:bg-gray-100' onMouseDown={() => fetchSearchedVideos(item)}>
                                        <i className="fa-solid fa-magnifying-glass"></i> {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>

            <div className='col-span-1 flex p-1'>
                <i className="fa fa-bell fa-2x pr-5" aria-hidden="true"></i>
                <img className='h-8 pl-5' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="userIcon" />
            </div>
        </div>

    )
}

export default Head