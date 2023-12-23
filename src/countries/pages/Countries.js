import React, { useState } from 'react'
import Search from '../components/Search'
import CountryCard from '../components/CountryCard'

import './Countries.scss'

const Countries = ({ countries }) => {
  const [searchCountries, setSearchCountries] = useState(countries)
  const [search, setSearch] = useState('')

  const handleSearch = (value) => {
    setSearch(value)
    setSearchCountries(
      countries.filter((country) =>
        country.name.common.toUpperCase().includes(value.toUpperCase())
      )
    )
  }

  const handleSearchByRegion = (region) => {
    setSearchCountries(countries.filter((country) => country.region === region))
  }

  return (
    <div className="Countries">
      <Search
        handleSearch={handleSearch}
        search={search}
        handleSearchByRegion={handleSearchByRegion}
      />
      <div className="countries">
        {searchCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Countries
