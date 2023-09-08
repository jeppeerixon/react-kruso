import { useState } from 'react'
import '../styles/Header.css'

interface IHeaderProps {
  dev: string; 
  handleBookingClick: () => void;
  handleSearch: (text: string) => void;
}

function Header( { dev, handleBookingClick, handleSearch }: IHeaderProps) {

  const [search, setSearch] = useState<string>('')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    handleSearch(e.target.value)
  }

  return (
      <header>
        <h1>
          FIND YOUR <strong>EXPERT</strong>
        </h1>
        <div className="searchBook">
          <input placeholder='Search' value={search} onChange={handleInputChange}/>
          <button onClick={handleBookingClick}>BOKA { dev || '' }</button>
        </div>
      </header>
  )
}
  
export default Header