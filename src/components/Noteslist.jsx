import React from 'react'
import './noteslist.css'
import { FaPlusCircle } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import image1 from '../assets/laptop.jpg'
import image2 from '../assets/vacation.webp'
import image3 from '../assets/flower.webp'
import Card from 'react-bootstrap/Card';
import Circle from '@uiw/react-color-circle';

function Noteslist() {
  return (
    <div className='container gradient__bg'>


        <div className="top-container gradient__bg">

            <div className="buttons-container">
                <button className='notes-button'>All</button>
                <button className='notes-button'>projects</button>
                <button className='notes-button'>Buisness</button>
                <button className='notes-button'>Personal</button>
            
            </div>

            <div className="button-newnote">
                <FaPlusCircle color='#6f5cc3'/> 
                <p>Add new note</p>
            </div>

        </div>







        <div className="boxes-container">
<Row style={{ marginBottom: '1rem',marginTop:"5rem" }}>
    <Col>
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
    
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Title> <span style={{ marginRight: '10px', color:"red",fontSize:'25px'}}>•</span>The monkey-rope</Card.Title>
        <Card.Text>
        
   Being the savage's bowsman, that is, the person who pulled the bow-oar
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>


    <Col> <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
        Being the savage's bowsman, that is, the person who pulled the bow-oar
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>


    <Col> <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
        <span style={{ marginRight: '5px', color:"yellow",fontSize:'25px'}}>•</span> Being the savage's bowsman, that is, the person,that is, the person who pulled the bow-oar
        
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>


    <Col>
     <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
     
      <Card.Body>
      <p className='date'>23 june, 2017</p>
      <Card.Img  src={image1} />
        <Card.Title>New work place</Card.Title>
       
        
      </Card.Body>
    </Card>
    </Col>


</Row>



<Row style={{ marginBottom: '1rem' }}>
    <Col>
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Title><span style={{ marginRight: '5px', color:"yellow",fontSize:'25px'}}>•</span>Vacation</Card.Title>
        <Card.Img src={image2}  />
        
      </Card.Body>
    </Card>
    </Col>


    <Col> 
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
    
    <Card.Body>
    <p className='date'>23 june, 2017</p>
      <Card.Title>The monkey-rope</Card.Title>
      <Card.Text>
        Being the savage's bowsman, that is, the person who pulled the bow-oar
      </Card.Text>
      
    </Card.Body>
  </Card>
    </Col>


    <Col>  <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
     
     <Card.Body>
     <p className='date'>23 june, 2017</p>
     <Card.Img src={image3} />
       <Card.Title>New work place</Card.Title>
      
       
     </Card.Body>
   </Card>
    </Col>


    <Col>
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
        <span style={{ marginRight: '15px', color:"green",fontSize:'25px'}}>•</span>Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>
</Row>




<Row>
    <Col>
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
        <span style={{ marginRight: '10px', color:"pink",fontSize:'15px'}}>•</span> Being the savage's bowsman, that is, the person who pulled the bow-oar
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>


    <Col> <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
        <span style={{ marginRight: '5px', color:"orange",fontSize:'25px'}}>•</span>Some quick example text to build on the card <br/>
          <span style={{ marginRight: '5px', color:"limegreen",fontSize:'25px'}}>•</span> and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>


    <Col> <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
      
      <Card.Body>
      <p className='date'>23 june, 2017</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>


    <Col>
    <Card style={{ width: '15rem' ,height:'15rem',border:'none' ,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
     
     <Card.Body>
     <p className='date'>23 june, 2017</p>
     <Card.Img src={image1} />
       <Card.Title>New work place</Card.Title>
      
       
     </Card.Body>
   </Card>
    </Col>
</Row>





       
        </div>
    </div>
  )
}

export default Noteslist