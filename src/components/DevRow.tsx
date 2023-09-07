import { IDeveloper } from "../models/IDeveloper"

function DevRow(props: IDeveloper) {

    return (
      <tbody>
        <tr>
            <td>{props.developer.title}</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
      </tbody>
    )
  }
  
  export default DevRow