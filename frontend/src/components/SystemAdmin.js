import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class SystemAdmin extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div>
                    <label>Payments</label>
                    <Link to="/addMovie" className="btn btn-primary">Payments</Link>

                </div>

            </div>

        )

    }

}