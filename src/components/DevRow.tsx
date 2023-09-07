import { IDeveloper } from "../models/IDeveloper"

function DevRow(props: IDeveloper) {

    return (
      <tbody>
        <tr>
            <td>{props.developer.title}</td>
            <td>{props.developer.experienceAmount}år</td>
            <td>{props.developer.office.city}</td>
            <td>{props.developer.availability}%</td>
            <td>{props.developer.price}kr/h</td>
        </tr>
      </tbody>
    )
  }
  
  export default DevRow