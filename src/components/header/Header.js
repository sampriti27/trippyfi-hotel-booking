import React, {useState} from 'react'
import { Hotel, Flight, DirectionsCar, LocalTaxi, Apartment, Person, CalendarToday, Search } from "@material-ui/icons"
import "./header.css"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    const [destinaion,setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions,setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1, 
    })
    const navigate = useNavigate();
    const handleOption = (name,operation) => {
            setOptions((prev) => {
                return {
                    ...prev,
                    [name]: operation === "i" ? options[name] + 1 : options[name] -1,
                }
            })
    }

    const handleSearch = () => {
        navigate("/hotels",{state:{destinaion,date,options}})
    }
    return (
        <div className='header'>
            <div className={type === "list" ? "headercontainer listMode" : "headercontainer"}>
                <div className='headerList'>
                    <div className='headerListItem active'>
                        <Hotel />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItem'>
                        <Flight />
                        <span>Flights</span>
                    </div>
                    <div className='headerListItem'>
                        <DirectionsCar />
                        <span>Car rentals</span>
                    </div>
                    <div className='headerListItem'>
                        <Apartment />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItem'>
                        <LocalTaxi />
                        <span>Airport Taxis</span>
                    </div>
                </div>
               
                {type !== "list" && <>
                    <div className='des'>
                    <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                    <p className='headerDesc'> Get rewarded for your travels. Unlock instant savings of 10% or more with a free trippify account.</p>
                    <button className='headerBtn'> Sign in/Register</button>
               
                </div>  </>}
                </div>

            { type != "list" && <> 
            <div className="headerSearch">
                <div className='headerSearchItem'>
                    <div className='headerIcon'>
                        <Hotel />
                    </div>

                    <input type="text" placeholder='Where are you going?' className='headerSearchInput'
                    onChange={e=>setDestination(e.target.value)} />
                </div>
                <div className='headerSearchItem'>
                    <div className='headerIcon'>
                        <CalendarToday />
                    </div>

                    <span onClick={() => setOpenDate(!openDate)} className='headerSearchItem'> {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`} </span>
                    {openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        rangeColors= {"#B73E3E"}
                        color={"#B73E3E"}
                        minDate={new Date()}
                    />}
                </div>
                <div className='headerSearchItem'>
                    <div className='headerIcon'>
                        <Person />
                    </div>
                    <span onClick={() => {setOpenOptions(!openOptions)}} className='headerSearchItem'> {`${options.adult} adult . ${options.children} children . ${options.room} room`} </span>
                   {openOptions && <div className='options'>
                        <div className='optionItem'>
                            <span className='optionText'>Adult</span>
                            <div className='optioncounter'>
                             <button 
                             disabled={options.adult <=1}
                             className='optionCounterButton' 
                             onClick={()=>handleOption("adult", "d")}
                             >-</button>
                             
                             
                                <span className='optionCounterNumber'>{options.adult}</span>
                             <button className='optionCounterButton' onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                           </div>
                        <div className='optionItem'>
                            <span className='optionText'>Children</span>
                            <div className='optioncounter'>
                                <button className='optionCounterButton' 
                                onClick={()=>handleOption("children", "d")}
                                disabled= {options.children <=0}>-</button>
                                <span className='optionCounterNumber'>{options.children}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption("children", "i")}>+</button>
                            </div>
                            
                        </div>
                        <div className='optionItem'>
                            <span className='optionText'>Room</span>
                            <div className='optioncounter'> 
                                <button className='optionCounterButton' 
                                onClick={()=>handleOption("room", "d")}
                                disabled= {options.room <=1}>-</button>
                                <span className='optionCounterNumber'>{options.room}</span>
                                <button className='optionCounterButton' onClick={()=>handleOption("room", "i")}>+</button>
                            </div>
                            
                        </div>
                    </div>}
                </div>
                <div className='headerSearchItem'>
                    <button className='searchBtn' onClick={handleSearch}> <Search /> </button>
                </div> 
            </div> </>}
        </div>
    )
}

export default Header
