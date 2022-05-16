import React,{Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import m1 from '../assets/latest1.jfif'
import m2 from '../assets/latest2.jfif'
import m3 from '../assets/latest3.jfif'
import axios from 'axios'

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state={
            nowShowing:[],
            upComing:[],
            nowShowingNames:[],
            upComingNames:[],

        }
    }

    componentDidMount() {
        axios.get('')
            .then(res=>{
                this.setState({nowShowingName:res.data})
            }).catch((error)=>{
                console.log(error);
        })
    }


    render() {
        return(
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

                <div>
                    <div>
                        <h1>Now Showing</h1>
                    </div>
                    <div>
                        <table>
                          <tbody>
                          {
                              this.state.nowShowingNames.map(e=>{
                                  return <tr key={e.id}>
                                      {
                                          <td>{e.nowShowingNames}</td>

                                      }
                                  </tr>
                              })

                          }

                          </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )


    }


}
