import { ReactEventHandler } from "react"

function NavBar( { props } ) {

    function handleClick(e: ReactEventHandler) {
        e.target.style

    }

    return (
        <aside>
            <nav>
                <ul>
                    {
                        props.map((cat: string) => {
                            return (<li onClick={handleClick}>{cat}</li>)
                        })
                    }
                    
                </ul>
            </nav>
        </aside>
    )
  }
  
  export default NavBar