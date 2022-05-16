import React from "react";

export default function Header(){
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <search-algolia-controls>

                </search-algolia-controls>

                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/movies">Movies</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/buyTickets">Book Now</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>



    )
}