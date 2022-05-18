import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class MovieAdmin extends Component{
    constructor(props) {
        super(props);
    }






    render() {
        return(
            <div>

                <div>
                    <label>Add movie</label>
                    <Link to="/addMovie" className="btn btn-primary">Add Movie</Link>

                </div>

                <div>
                    <label>Movies</label>
                    <Link to="/movies" className="btn btn-primary">Movies</Link>
                </div>

            </div>

        )
    }


}