
import Movie from '../Movie/Movie';
import ModalMovie from '../ModalMovie/ModalMovie';
import axios from 'axios';
import { useState, useEffect } from 'react';

function MovieList(props) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    console.log(props.data)
    return (
        
        <>
            {
                props.data.length && props.data.map((ele) => (
                    <Movie data={ele} show={setShow} cardInfo={setCardInfo} />
                    
            ))
                }

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