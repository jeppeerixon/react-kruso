import './App.css'
import DevRow from './components/DevRow'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {

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
            <DevRow />
            
          </table>
        </section>

      </main>
    </>
  )
}

export default App
