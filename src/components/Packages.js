import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'


export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => 
        <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <div className="aboutpage">
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Getting confuse about hike or track, here is all our packages!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages} 
                </ListGroup>
            </Card>
        </Container>
        </div>
    )
}