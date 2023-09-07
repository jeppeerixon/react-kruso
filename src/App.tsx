import { useEffect, useState } from 'react'
import './App.css'
import DevRow from './components/DevRow'
import Header from './components/Header'
import NavBar from './components/NavBar'
import data from './data/developers.json'
import { IDeveloper } from './models/IDeveloper'

function App() {

  const [devData, setDevData] = useState<IDeveloper[]>(data.employees)
  const [categories, setCategories] = useState<string[]>([])

  function getCategories(theData: IDeveloper[]) {
    const tempArray: string[] = ['All']
    theData.forEach((cat: IDeveloper) => {
      if (!tempArray.includes(cat.developer.category))
        tempArray.push(cat.developer.category)
    })
    setCategories(tempArray)
  }

  useEffect(() => {
    getCategories(data.employees)
  }, [])

  return (
    <>
      <NavBar props={categories} />

      <main>

        <Header />

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
                  return (<DevRow {...employee} />)
                })
              }                        
          </table>

        </section>

      </main>
    </>
  )
}

export default App
