import '../styles/Header.css'

function Header( { dev, handleBookingClick }) {

    return (
        <header>
          <h1>
            FIND YOUR <span>EXPERT</span>
          </h1>
          <div className="searchBook">
            <input placeholder='Search'/>
            <button onClick={handleBookingClick}>BOKA { dev || '' }</button>
          </div>
        </header>
    )
  }
  
  export default Header