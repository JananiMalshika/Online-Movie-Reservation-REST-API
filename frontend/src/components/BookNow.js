import React,{Component} from "react";
import axios from 'axios';
import { Form } from 'react-bootstrap';

export default class BookNow extends Component{

    constructor(props) {
        super(props);
        this.state={
            movieName:'',
            childTicketCount:'',
            adultTicketCount:'',
            date:'',
            Amount:'',
            payable:'',
            theatre:'',
            CHILD:'',
            adult:'',
            Email:'',
            tel:'',
            order:[],
            dateError:'',
            theatreError:'',
            ticketCountError:'',
            EmailError:'',
            telError:''
        }

        //this.theatre1=[900,1050]
        //this.theatre2=[300,450]

    }

    onChangeDate=(e)=>{
        this.setState({
            date: e.target.value
        })
    }

    onChangeTheatre=(e)=>{
        this.setState({
            theatre: e.target.value
        })

        if (e.target.value==='theatre1'){
            this.setState({
                CHILD: 900,
                adult:1050
            })
        }else if (e.target.value==='theatre2'){
            this.setState({
                CHILD: 300,
                adult:450
            })
        }

        console.log(this.state.CHILD)
        console.log(this.state.adult)

    }

    onChangeChildT=(e)=>{
        this.setState({
            childTicketCount:e.target.value,
        })
    }

    onChangeAdultT=(e)=>{
        this.setState({
            adultTicketCount:e.target.value,
        })
    }

    onChangeEmail=(e)=>{
        this.setState({
            Email:e.target.value
        })
    }

    onChangeTel=(e)=>{
        this.setState({
            tel:e.target.value
        })
    }

    validate=()=>{
        let dateError='';
        let theatreError=''
        let ticketCountError=''
        let EmailError=''
        let telError=''

        if(!this.state.date){
            dateError="Please select a date"
        }
        if(!this.state.theatre){
            theatreError="Please select a theatre"
        }
        if(!this.state.childTicketCount && !this.state.adultTicketCount){
            ticketCountError="Please select number of seats"
        }
        if(!this.state.Email){
            EmailError="Email cannot be empty"
        }
        if(this.state.tel){
            telError="Contact number cannot be empty"
        }

        if(dateError||theatreError||ticketCountError||EmailError||telError){
            this.setState({ dateError,theatreError,ticketCountError,EmailError,telError})
            return false
        }

        return true

    }

    onSubmit=(e)=>{
        e.preventDefault();

        const order={

        }

        const isValid=this.validate()




    }

    render() {
        return(
            <div>
                <form onSubmit={}>
                    <div className="form-group">
                        <label>
                            Select Show date
                            <select value={this.state.date} onChange={this.onChangeDate}>
                                <option value="2022-05-17">Tue, 17 May</option>
                                <option value="2022-05-18">Wed, 18 May</option>
                                <option value="2022-05-19">Thurs, 19 May</option>
                                <option value="2022-05-20">Fri, 20 May</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Select theatre
                            <select value={this.state.theatre} onChange={this.onChangeTheatre}>
                                <option value="theatre1">theatre1</option>
                                <option value="theatre2">theatre2</option>
                            </select>
                            <div>
                                <p>Child: <span>{
                                    this.state.CHILD

                                }</span></p>
                            </div>
                            <div>
                                <p>Adult: <span>{
                                    this.state.adult
                                }</span></p>
                            </div>
                        </label>
                    </div>

                    <div><h3>How many seats?</h3></div>
                    <div className="form-group">

                        <label htmlFor="Child" className="form-label">Child</label>
                        <input type="text" class="form-control" id="Amount"
                               value={this.state.childTicketCount}
                               onChange={this.onChangeChildT}
                               inputMode="numeric" pattern="[0-9]*" />

                    </div>

                    <div className="form-group">

                        <label htmlFor="Adult" className="form-label">Adult</label>
                        <input type="text" className="form-control" id="Amount"
                               value={this.state.adultTicketCount}
                               onChange={this.onChangeAdultT}
                               inputMode="numeric" pattern="[0-9]*"/>

                    </div>
                    <div className="form-group">

                        <label htmlFor="e-mail" className="form-label">Enter email</label>
                        <input type="text" className="form-control" id="Amount" placeholder="Enter E-mail"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               inputMode="numeric" pattern="[0-9]*"/>

                    </div>

                    <div className="form-group">

                        <label htmlFor="Number" className="form-label">Enter contact number</label>
                        <input type="text" className="form-control" id="Number"
                               value={this.state.tel}
                               onChange={this.onChangeTel}
                               inputMode="numeric" pattern="[0-9]*"/>

                    </div>
                    <input type="submit" value="Checkout" />
                </form>
            </div>

        )
    }


}