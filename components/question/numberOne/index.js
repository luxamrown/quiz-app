
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";



const questionOne = [{
    question:'#1 Where is Boeing Headquarter?',
    answer:[{
        choice:'A. America',
    },{
        choice:'B. Jamaica'
    },{
        choice:'C. Nepal'
    },{
        choice:'D. Indonesia'
    }
],
}]
export const NumberOne = () =>{
    const [answer, setAnswer] = useState()

    const handleClick = e =>{
        if (document.getElementById(e).id !== answer){
            document.getElementById(e).style.color = 'white'
        }
        document.getElementById(e).style.color = 'black';
        setAnswer(e)
    }

    return(
        <div className="question-container">
                <Container>
                    <Row>
                        <Col>
                            {
                                questionOne.map((item, idx)=>{
                                    return(
                                        <h1 key={idx}>{item.question}</h1>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {
                                questionOne.map((item, i)=>{
                                    return(
                                        item.answer.map((choice, j)=>{
                                            return(
                                                <>
                                                <Button key={j} id={choice.choice} onClick={() => handleClick(choice.choice)} variant="outline-light" type="submit" className='px-5 m-2 rounded-0'>
                                                {choice.choice}
                                                </Button>
                                                </>
                                            )
                                        })
                                    )
                                })
                            }

                        </Col>
                    </Row>
                <Button variant="success" type="submit" className='px-5 m-2 rounded-0'>
                Answer</Button>
                </Container>
            </div>
    )
}