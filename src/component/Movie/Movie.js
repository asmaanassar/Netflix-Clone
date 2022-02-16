import { Button,Card, Col } from 'react-bootstrap';
function Movie(props) {

    return (
        <Col key={props.data.id} md={4}>
            <Card className='div-card'>
                <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title className='div-card-title'>{props.data.title}</Card.Title>
                    <Card.Link className='div-card-link'>
                        {props.data.sourceUrl}
                    </Card.Link>
                    <div>
                        <Button className='div-card-button' variant="primary"
                            onClick={() => {
                                props.cardInfo(props.data)
                                props.show(true);
                            }}>Add To Favorite</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>

    );
}
export default Movie