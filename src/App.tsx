import './App.css'

function App() {

  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>ALL</li>
          </ul>
        </nav>
      </aside>

      <main>

        <header>
          <h1>
            FIND YOUR <span>EXPERT</span>
          </h1>
          <div>
            <input placeholder='Search'/>
            <button>BOKA</button>
          </div>
        </header>

        <section>
          <table>
            <tr>
              <th>KOMPETENS</th>
              <th>ERFARENHET</th>
              <th>GEOGRAFI</th>
              <th>TILLGÄNGLIGHET</th>
              <th>PRIS</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </section>

      </main>
    </>
  )
}

export default App
