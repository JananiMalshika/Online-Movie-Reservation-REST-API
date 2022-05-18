import React,{Component} from "react";
import axios from "axios";

const NowShowingMovie = props =>(
    <div>
    <div><img src={props.movies.poster}/></div>
        <div>
            <a className="btn btn-primary" href={`/bookNow/${props.movies._id}`}>
                <i className="fa-solid fa-ticket"></i>&nbsp;Book Now
            </a>
        </div>
    </div>


)

export default class Movies extends Component{
    constructor(props) {
        super(props);
        this.state={
            movies:[],
        }

    }

    componentDidMount() {
        axios.get('')
            .then(res=>{
                this.setState({movies:res.data})
            }).catch((error)=>{
                console.log(error);
        })

    }

    CurrentMovies(){
        return this.state.movies.map(currentMovie => {

            return <NowShowingMovie movies={currentMovie} />

        })

    }


    render() {
        return(
            <div className="container">

                <template>
                    <div>
                        {
                            this.CurrentMovies()
                        }
                    </div>
                </template>

            </div>
        )
    }


}