import { useState } from "react";

interface NavBarProps {
    props: string[]; 
    sortBy: (category: string) => void;
}

function NavBar( { props, sortBy }: NavBarProps ) {

    const [selected, setSelected] = useState(0);

    function handleClick(e: MouseEvent<HTMLLIElement, MouseEvent>) {
        setSelected(e.target.value)
        sortBy(e.target.innerHTML)
    }

    return (
        <aside>
            <nav>
                <ul>
                    {
                        props.map((cat: string, i) => {
                            return (<li value={i} className={selected == i ? 'activeCategory' : null} onClick={handleClick}>{cat}</li>)
                        })
                    }
                    
                </ul>
            </nav>
        </aside>
    )
  }
  
  export default NavBar