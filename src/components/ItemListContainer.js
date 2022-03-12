
import { Card, Button, Carousel } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useState } from "react"

function ItemListContainer({greeting}) {

    
    const [count, setCount] = useState(0)

    const initial=0
    const stock= 2

    const onAdd = () => {
        setCount(count + 1)

    }

    const onSubstract = () => {
        setCount(count - 1)
    }



    return (

        <>
            <h1>{greeting}</h1>
           
            <>
            <Card style={{ width: '20rem' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtxyOtsd2sDcUfp8fXGEuiRJ0l34rOB2NQcbApjkoI5uVcZQC31MTkzNwTVm7jA7mhKV50F%25vqCrayLRz3RYaxPXWrH1eMRn8wsQcoiZUMdM4FnIwTg9ovn6PDMSoSeWzKStsd7vVcUfK8yXGE4ymJ0lgorOB2PS5bApet9I5usQJQC3UkTkzNGLwm7j0amhKVBHE%25vqNt9yLRiO6Yax4JOroYhfldombAp7oMIkb1ECQmILArkzNetDm7jCeShKVzYV%25vq7rcyLRaGfYaxH08rH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGFAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtxyOtsd2sDcUfp8fXGEuiRJ0l34rOB2NQcbApjkoI5uVcZQC31MTkzNwTVm7jA7mhKV50F%25vqCrayLRz3RYaxPXWrH1eMRn8wsQcoiZUMdM4FnIwTg9ovn6PDMSoSeWzKStsd7vVcUfK8yXGE4ymJ0lgorOB2PS5bApet9I5usQJQC3UkTkzNGLwm7j0amhKVBHE%25vqNt9yLRiO6Yax4JOroYhfldombAp7oMIkb1ECQmILArkzNetDm7jCeShKVzYV%25vq7rcyLRaGfYaxH08rH18Cln8wioyoiZ4MIM4zuA1YtEWpTuP9pGFAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1530,750),gravity=Center;Resize,width=650"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNYFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtle9tsd2HdcUfp8qXGEuiYJ0l3ItOB2NQnbApjtwI5uxoMQC31MjkzNBzNm7jAyvhKV5pV%25vq4t9yLRgLFYaxPoqrH1eItn8wYOxoiZr7YM4FnTrTg95zT6PDCLmSeWznMtsd7oGcUfi%25kXGE4nYJ0lg6AOB2PSFbApeIXI5usQMQC3Uv1kzNGLkm7j0afhKV3SF%25vq8JTyLRiXJYnymdEWnkOB2znobQOxf5IkbvBYQC3PS9kzN5P6m7jCGohKVzYt%25vqEatyLRaGfYaxH08rH18Cln8wioyoiCpBxySfD2MpgF2vZBZbMFwRPPW3SN9hFNTmj32v2bwbU15zsRG1gdPNYFN&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,-50,1350,700),gravity=Center;Resize,width=650"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>GLC Coupe</Card.Title>
                    <Card.Text>
                        Robusta desde cualquier punto de vista
                    </Card.Text>
                    <ItemCount count={count} initial={initial} stock={stock} onAdd={onAdd} onSubstract={onSubstract} />
                    <Button variant="outline-secondary">Mas Info</Button>
                </Card.Body>
            </Card>
            
        </>

        </>
    )





}



export default ItemListContainer
