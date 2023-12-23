import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import './Search.scss'

const Search = ({ handleSearch, search, handleSearchByRegion }) => {
  const regions = ['Africa', ' Americas', 'Asia', 'Europe', 'Oceania']
  const [openRegions, setOpenRegion] = useState(false)

  return (
    <div className="search">
      <div className="search-input">
        <IoSearch />
        <input
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
      <div className="region-options">
        <div
          className="region-options-filter"
          onClick={() => setOpenRegion(!openRegions)}
        >
          <p>Filter by Region</p>
          {!openRegions ? <FiChevronDown /> : <FiChevronUp />}
        </div>
        {openRegions && (
          <div className="regions">
            {regions.map((region) => (
              <p onClick={() => handleSearchByRegion(region)}>{region}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
