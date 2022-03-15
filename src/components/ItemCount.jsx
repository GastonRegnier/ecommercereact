
import { Button } from 'react-bootstrap';


function ItemCount({count,initial, stock, onAdd, onSubstract}) {


    return (
        <div style= {{padding:"1rem"}}>
            <Button disabled={count === initial} onClick={onSubstract} variant="outline-dark">-</Button>
                <label style={{margin:"1rem"}}>{count}</label>
            <Button disabled={count >= stock} onClick={onAdd} variant="outline-dark">+</Button>
            {count >= stock && <p>Ya alcanzaste el monto maximo!</p>}
            {count === initial && <p>Agrega items al carrito!</p>}
        </div>
    )
}

export default ItemCount


