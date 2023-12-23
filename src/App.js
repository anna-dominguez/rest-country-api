import axios from 'axios'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './shared/components/Header/Header'
import Countries from './countries/pages/Countries'
import Country from './countries/pages/Country'

const allCountries = (await axios('https://restcountries.com/v3.1/all')).data

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            exact
            element={<Countries countries={allCountries} />}
          />
          <Route
            path="/:countryName"
            exact
            element={<Country countries={allCountries} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
    // <main>

    // </main>
  )
}

export default App
