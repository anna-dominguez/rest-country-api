import './Header.scss'
import { IoMoonOutline } from 'react-icons/io5'
// import { IoMoonSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Where in the world?</h1>
        <div className="dark-mode">
          {/* if dark mode on  */}
          {/* <IoMoonSharp /> */}

          {/* if dark mode off */}
          <IoMoonOutline />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  )
}

export default Header
