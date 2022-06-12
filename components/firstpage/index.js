import { Container, Row, Col } from "react-bootstrap";
import UserForm from "./form";
import Image from "next/dist/client/image";

export default function FirstPage() {
  return (
    <>
        <Container fluid className="w-25 home">
            <Row>
                <Col className="text-center">
                    <Image src={"/images/enam.svg"} alt="logo" width={256} height={256} quality={100}/>
                    <h1>Welcome to Quiz App</h1>
                </Col>
            </Row>
            <UserForm/>
        </Container>
    </>
  )
}
