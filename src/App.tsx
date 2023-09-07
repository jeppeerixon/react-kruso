import { useState } from 'react'
import './App.css'
import DevRow from './components/DevRow'
import Header from './components/Header'
import NavBar from './components/NavBar'
import data from './data/developers.json'
import { IDeveloper } from './models/IDeveloper'

function App() {

  const [devData, setDevData] = useState<IDeveloper[]>(data.employees)

  return (
    <>
      <NavBar />

      <main>

        <Header />

        <section>
          <table>
            <tr>
              <th>KOMPETENS</th>
              <th>ERFARENHET</th>
              <th>GEOGRAFI</th>
              <th>TILLGÄNGLIGHET</th>
              <th>PRIS</th>
            </tr>
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
