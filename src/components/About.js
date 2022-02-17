import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


export default function About () {
    return (
        <div className="aboutpage">
            <div className="aboutHeader">
                
            </div>
           
<Container>
    <Card border="info" >
        <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
        <Card.Body>
            <Card.Text>
            The greatest glory in living lies not in never falling, but in rising every time we fall.
            </Card.Text>
            <Card.Text>
            The way to get started is to quit talking and begin doing.
            </Card.Text>
            <Card.Text>
            Your time is limited, so don't waste it living someone else's life.
            </Card.Text>
            <Card.Text>
            If life were predictable it would cease to be life, and be without flavor.
            </Card.Text>
        </Card.Body>
        <Card.Img style={{ width: '40%', margin: '0 auto'}}  variant="center" src="man.jpeg" />
    </Card>
</Container>
        </div>
    )
}