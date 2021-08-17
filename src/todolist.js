import {Button} from "bootstrap"
function List(props){
    return(
        <div className="row1">
            <li className="shadow p-1 my-1 col-sm-9">
                <input className="col-sm-8 my-1" type="text" value={props.value} readOnly={props.readOnly}></input>
                <button className="btn btn-danger my-1 col-sm-2" onClick={()=>{props.sendData(props.id)}}>x</button>
                <button className="btn btn-info my-1 col-sm-2" onclick={()=>{props.sendEdit(props.id)}}>Edit</button>
            </li>
           
        </div>
    )
}
export default List;