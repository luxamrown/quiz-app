import React, { Component } from 'react'
import { Container, Row, Col} from "react-bootstrap";


export default class QuestionProfile extends Component {
    constructor(){
        super()
        this.state =({
            name:'',
            point:0
        })
    }
    componentDidMount(){
        this.setState({
            name:window.sessionStorage.getItem('name')
        })
    }
    

    render(){
        return (
          <div className="question-profile">
          <Container>
                  <Row>
                      <Col>
                          <h1>{this.state.name}</h1>
                          <span>{this.state.point} Points</span>
                      </Col>
                  </Row>
              </Container>
          </div>
        )
    }
}


// export default class index extends Component {
//   render() {
//     return (
//       <div>index</div>
//     )
//   }
// }

