import { useEffect, useState } from 'react'
import './styles/App.css'
import DevRow from './components/DevRow'
import Header from './components/Header'
import NavBar from './components/NavBar'
import data from './data/developers.json'
import { IDeveloper } from './models/IDeveloper'
import BookingModal from './components/BookingModal'

function App() {

  const [devData, setDevData] = useState<IDeveloper[]>(data.employees)
  const [bookedDev, setBookedDev] = useState<IDeveloper>(null)
  const [bookedTitle, setBookedTitle] = useState<string>('')
  const [activeBooking, setActiveBooking] = useState<boolean>(false)

  function sortByCategory(category: string) {
    if (category === 'All') {
      setDevData(data.employees)
    } else {
      setDevData(data.employees.filter((employee) => employee.developer.category === category));
    }
  }

  function handleSelectDev(dev: IDeveloper) {
    setBookedDev(dev)
    setBookedTitle(dev.developer.title.toUpperCase())
  }

  function handleBookingClick() {
    if (bookedDev == null) {
      setBookedTitle('GENOM ATT KLICKA PÅ UTVECKLARE')
    } else {
      setActiveBooking(!activeBooking)
    }
  }

  function handleCloseClick() {
    setActiveBooking(!activeBooking)
  }

  return (
    <>
      <NavBar props={data.employees} sortBy={sortByCategory} />

      <main>

        <Header dev={bookedTitle} handleBookingClick={handleBookingClick} />

        <section>
          <table>
            <tbody>
              <tr>
                <th>KOMPETENS</th>
                <th>ERFARENHET</th>
                <th>GEOGRAFI</th>
                <th>TILLGÄNGLIGHET</th>
                <th>PRIS</th>
              </tr>
            </tbody>
              {
                devData.map((employee: IDeveloper) => {
                  return (<DevRow key={employee.developer.id} props={employee} selectDev={handleSelectDev} />)
                })
              }                        
          </table>
          {
            activeBooking && <BookingModal props={bookedDev} closeModal={handleCloseClick} />
          }

        </section>

      </main>
    </>
  )
}

export default App
