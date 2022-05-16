import React,{Component} from "react";

export default class BookNow extends Component{

    constructor(props) {
        super(props);
        this.state={
            movieName:'',
            ticketCount:'',
            name:'',
            phoneNumber:'',
            date:'',
            email:'',
            Amount:'',
            price:''
        }

        this.theater1=[900,1050]
        this.theater2=[300,450]

    }

    onChangeDate=(e)=>{
        this.setState({
            date: e.target.value
        })
    }


    render() {
        return(
            <div>
                <form onSubmit={}>
                    <label>
                        Select Show date
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="2022-05-17">Tue, 17 May</option>
                            <option value="2022-05-18">Wed, 18 May</option>
                            <option value="2022-05-19">Thurs, 19 May</option>
                            <option value="2022-05-20">Fri, 20 May</option>
                        </select>
                    </label>
                    <input type="submit" value="Pay" />
                </form>

            </div>



        )
    }


}