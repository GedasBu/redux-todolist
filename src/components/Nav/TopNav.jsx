import {Button, ButtonGroup} from "react-bootstrap";
import { filterTodo } from "../../store/actions/TodoActions";
import { connect } from "react-redux";

const TopNav =(props)=>{
    let {filterTodo} = props

    return(
       <ButtonGroup>
           <Button variant="primary" onClick={()=>filterTodo('VISOS')}>Visos užduotys</Button>
           <Button variant="primary" onClick={()=>filterTodo('AKTYVIOS')}>Aktyvios užduotys</Button>
           <Button variant="primary" onClick={()=>filterTodo('PABAGTOS')}>Pabaigtos užduotys</Button>
           </ButtonGroup>
    )
}

export default connect (null, {filterTodo})(TopNav)