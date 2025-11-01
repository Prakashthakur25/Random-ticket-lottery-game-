import Ticketnum from "./TicketNum"
import "./style.css"



export default function Ticket({num}){

return(

   <div className="ket">
    <p>Ticket!</p>
    <Ticketnum num={num}/>
</div>
) 


}