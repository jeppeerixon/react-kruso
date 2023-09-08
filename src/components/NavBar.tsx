import { useEffect, useState } from "react";
import '../styles/NavBar.css'
import { IDeveloper } from "../models/IDeveloper";

interface NavBarProps {
    props: IDeveloper[]; 
    sortBy: (category: string) => void;
}

function NavBar( { props, sortBy }: NavBarProps ) {

    const [selected, setSelected] = useState(0);
    const [categories, setCategories] = useState<string[]>([])

    function handleClick(e: MouseEvent<HTMLLIElement, MouseEvent>) {
        setSelected(e.target.value)
        sortBy(e.target.id)
    }

    //måste gå att göra på bättre sätt !?
    function getCategories(theData: IDeveloper[]) {
        let tempArray: [] = [];
        theData.map(dev => {
          const found = tempArray.find(check => check.category === dev.developer.category)
          if (found) {
            found.quantity ++;
          } else {
              let category = dev.developer.category
              const updatedCategories = [...tempArray, {category, quantity: 1}]
              tempArray = updatedCategories;    
          }
        })
        const sumAll = tempArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0,
          );
        tempArray.unshift({category: 'All', quantity: sumAll})
        setCategories(tempArray)
    }

      useEffect(() => {
        getCategories(props)
      }, [])

    return (
        <aside>
            <nav>
                <ul>
                    {
                        categories.map((cat , i) => {
                            return (
                                <li value={i} key={i} className={selected == i ? 'activeCategory' : null} id={cat.category} onClick={handleClick}>
                                    {cat.category.toUpperCase()}
                                    <span>{cat.quantity} Developers Avalible</span>
                                </li>)
                        })
                    }
                    
                </ul>
            </nav>
        </aside>
    )
  }
  
  export default NavBar