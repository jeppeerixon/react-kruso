import { IDeveloper } from "../models/IDeveloper"

function BookingModal( { props }: IDeveloper ) {

    return (
        <div className="bookingModal">
            <h1>{props.developer.title.toUpperCase()}</h1>
            <h1>{props.developer.experienceAmount} års erfarenhet</h1>
            <h1>från {props.developer.office.city}</h1>
            <h1>{props.developer.availability}% anställning</h1>
            <h1>{props.developer.price} kr i timmen</h1>
            <div>
                <button>Stäng</button>  
                <button>Fortsätt bokning</button> 
            </div>
        </div>
    )
  }
  
  export default BookingModal