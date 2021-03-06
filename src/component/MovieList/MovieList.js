
import Movie from '../Movie/Movie';
import ModalMovie from '../ModalMovie/ModalMovie';
import { Container, Row } from 'react-bootstrap';
import { useState} from 'react';

function MovieList(props) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    console.log(props.data)
    return (

        <>
            <Container className='div-container'>
                <Row md={3} className="main">
                {
                    props.data.length && props.data.map((ele) => (
                        <Movie data={ele} show={setShow} cardInfo={setCardInfo} />

                    ))
                }
            </Row>
        </Container>

            {
        <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
    }
    {
        !props.data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }
        </>
    );
}
export default MovieList;