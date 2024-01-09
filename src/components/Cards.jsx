import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';


const Cards = ({pokemones}) => {
 return (
    <Row>
    
   
{
pokemones.map((pokemon)=>(
<Col key={pokemon.id}>
    <Card style={{ width: '18rem' }} className='mb-4'>
    <Card.Img variant='top' src={pokemon.sprites.front_default} alt='imagen'/> 
    <Card.Body>
    
      
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          {`Pokemon num: ${pokemon.id}`}
    </Card.Text>
      </Card.Body>
      </Card>
    </Col>
))
}



    </Row>
 )
}

Cards.propTypes = {
  pokemones: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.number.isRequired,
       name: PropTypes.string.isRequired,
       sprites: PropTypes.shape({
         front_default: PropTypes.string.isRequired,
       }).isRequired,
     })
  ).isRequired,
 };

export default Cards