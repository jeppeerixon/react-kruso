import { useEffect, useState } from 'react'
import './App.css'
import DevRow from './components/DevRow'
import Header from './components/Header'
import NavBar from './components/NavBar'
import data from './data/developers.json'
import { IDeveloper } from './models/IDeveloper'
import BookingModal from './components/BookingModal'

function App() {

  const [devData, setDevData] = useState<IDeveloper[]>(data.employees)
  const [categories, setCategories] = useState<string[]>([])
  const [bookedDev, setBookedDev] = useState<IDeveloper>(null)
  const [bookedTitle, setBookedTitle] = useState<string>('')
  const [activeBooking, setActiveBooking] = useState<boolean>(false)

  function getCategories(theData: IDeveloper[]) {
    const tempArray: string[] = ['All']
    theData.forEach((cat: IDeveloper) => {
      if (!tempArray.includes(cat.developer.category))
        tempArray.push(cat.developer.category)
    })
    setCategories(tempArray)
  }

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

  useEffect(() => {
    getCategories(data.employees)
  }, [])

  return (
    <>
      <NavBar props={categories} sortBy={sortByCategory} />

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
                  return (<DevRow props={employee} selectDev={handleSelectDev}/>)
                })
              }                        
          </table>
          {
            activeBooking && <BookingModal props={bookedDev} />
          }

        </section>

      </main>
    </>
  )
}

export default App
