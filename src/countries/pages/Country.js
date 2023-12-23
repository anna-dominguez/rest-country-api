import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

import './Country.scss'

const Country = ({ countries }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')
  const params = useParams()

  const country = countries.find(
    (country) => country.name.common === params.countryName
  )

  return (
    <div className="country">
      <button className="back" onClick={() => handleClick()}>
        <FaArrowLeftLong />
        <p>Back</p>
      </button>
      <section>
        <div>
          <img src={country.flags.svg} alt="country flag" />
        </div>
        <div className="country-details">
          <h1>{country.name.common}</h1>

          <div className="country-details__content">
            <div className="details">
              <div className="detail">
                <h3>Native Name:</h3>
                <p>{Object.values(country.name.nativeName)[0].common}</p>
              </div>
              <div className="detail">
                <h3>Population:</h3>
                <p>{country.population}</p>
              </div>
              <div className="detail">
                <h3>Region:</h3>
                <p>{country.region}</p>
              </div>
              <div className="detail">
                <h3>Sub Region:</h3>
                <p>{country.subregion}</p>
              </div>
              <div className="detail">
                <h3>Capital:</h3>
                <p>{country.capital[0]}</p>
              </div>
            </div>
            <div className="details">
              <div className="detail">
                <h3>Top Level Domain:</h3>
                <p>{country.tld[0]}</p>
              </div>
              <div className="detail">
                <h3>Currencies:</h3>
                <p>{Object.values(country.currencies)[0].name}</p>
              </div>
              <div className="detail">
                <h3>Languages:</h3>
                <p>{Object.values(country.languages).join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="border-countries">
            <h3>Border countries:</h3>
            <div className="borders">
              {country.borders?.map((border) => {
                const borderCountry = countries.find(
                  (country) =>
                    country.car.cca2 === border ||
                    country.car.cca3 === border ||
                    country.car.cioc === border ||
                    country.fifa === border
                )

                if (!borderCountry) return null
                return (
                  <p
                    className="border"
                    onClick={() => navigate(`/${borderCountry.name.common}`)}
                    key={border}
                  >
                    {borderCountry?.name.common}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Country
