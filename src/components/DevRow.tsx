import { IDeveloper } from "../models/IDeveloper"

interface DevProps {
  props: IDeveloper; 
  selectDev: (dev: IDeveloper) => void;
}

function DevRow( { props, selectDev }: DevProps ) {

    function handleSelectClick() {
      selectDev(props)
    }

    return (
      <tbody>
        <tr onClick={handleSelectClick}>
            <td>{props.developer.title.toUpperCase()}</td>
            <td>{props.developer.experienceAmount}år</td>
            <td>{props.developer.office.city.toUpperCase()}</td>
            <td>{props.developer.availability}%</td>
            <td>{props.developer.price}kr/h</td>
        </tr>
      </tbody>
    )
  }
  
  export default DevRow