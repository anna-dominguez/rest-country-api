import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CountryCard.scss'

const CountryCard = ({ country }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/${country.name.common}`)

  return (
    <article onClick={() => handleClick()}>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
      <div className="country-content">
        <h2>{country.name.common}</h2>
        <div className="country-content__details">
          <p>
            <span className="bold">Population:</span> {country.population}
          </p>
          <p>
            <span className="bold">Region:</span> {country.region}
          </p>
          <p>
            <span className="bold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CountryCard
