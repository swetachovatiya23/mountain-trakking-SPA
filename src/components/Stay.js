import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Stay(props) {
    const displayStay = props.stay.map((eachStay) => 
        <ListGroup.Item>{eachStay}</ListGroup.Item>)

    return (
        <div className="aboutpage">
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Stay For SPA</Card.Title>
                    <Card.Text>
                    WE BELIEVE IN COMFORT WITH CONSCIENCE !
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayStay} 
                </ListGroup>
            </Card>
        </Container>
        </div>
    )
}