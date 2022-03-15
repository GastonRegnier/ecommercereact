

import ItemCount from './ItemCount';
import { Card, Button, Carousel, Spinner } from 'react-bootstrap';
import { useState, useEffect } from "react"



function Item({ getPromesa }) {



    const [count, setCount] = useState(0)

    const initial = 0
    const stock = 2

    const onAdd = () => {
        setCount(count + 1)

    }

    const onSubstract = () => {
        setCount(count - 1)
    }


    const [loading, setLoading] = useState(true)
    const [prods, setProds] = useState([])

    useEffect(() => {
        getPromesa
            .then(resp => setProds(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    })




    return (



        <  >
            {loading ? <h2> <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> </h2> :
                prods.map((prod) =>
                    <div style={{ marginBottom: "50px", marginLeft: "600px" }}>
                        <Card style={{ width: '20rem' }}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={prod.foto}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={prod.fotodos}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={prod.fototres}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <Card.Body>
                                <Card.Title>{prod.titulo}</Card.Title>
                                <Card.Text>
                                    {prod.texto}
                                </Card.Text>
                                <ItemCount count={count} initial={initial} stock={stock} onAdd={onAdd} onSubstract={onSubstract} />
                                <Button variant="outline-secondary">Mas Info</Button>
                            </Card.Body>
                        </Card>
                    </div>

                )}
        </>


    )
}
export default Item