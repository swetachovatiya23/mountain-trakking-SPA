import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Culinary(props) {
    const displayCulinary = props.culinary.map((eachCulinary) => 
        <ListGroup.Item>{eachCulinary}</ListGroup.Item>)

    return (
        <div className="aboutpage">
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Culinary</Card.Title>
                    <Card.Text>
                    Conscious Cooking is at the core of how we approach food.
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayCulinary} 
                </ListGroup>
            </Card>
        </Container>
        </div>
    )
}