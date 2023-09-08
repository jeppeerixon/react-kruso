import { IDeveloper } from "../models/IDeveloper"
import '../styles/BookingModal.css'

interface ModalProps {
    props: IDeveloper; 
    closeModal: () => void;
}

function BookingModal( { props, closeModal }: ModalProps ) {

    return (
        <div className="darkBG">
            <div className="bookingModal">
                <h1>{props.developer.title.toUpperCase()}</h1>
                <h1>{props.developer.experienceAmount} års erfarenhet</h1>
                <h1>från {props.developer.office.city}</h1>
                <h1>{props.developer.availability}% anställning</h1>
                <h1>{props.developer.price} kr i timmen</h1>
                <div>
                    <button className="closeBtn" onClick={() => {closeModal()}}>STÄNG</button>  
                    <button>BOKA MÖTE</button> 
                </div>
            </div>
        </div>
    )
  }
  
  export default BookingModal