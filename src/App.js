import React,{Component} from "react"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.esm"
import List from "./todolist"
// import {InputGroup,FormControl,Input} from "react-bootstrap"
class App extends Component{
 constructor(props){
    super(props)
    // this.handleEdit=this.handleEdit.bind(this);
    // this.state={readOnly:true}
 
   this. state={
       list:[],
       userInput:"",
       
     }
     this.onKeyUp=this.onKeyUp.bind(this)
    }
    onKeyUp(event){
      if(event.key==="Enter"){
        const Ite=[...this.state.list,this.state.userInput];
        this.setState({list:Ite,userInput:""})
      }
    }
   
   handleChange=e=>{
     this.setState({userInput:e.target.value})
   }
   
   
   
   handleAdd=(e)=>{
     if(this.state.userInput !==""){
       const Items=[...this.state.list,this.state.userInput];
     this.setState({list:Items,userInput:""})
   }
  }
  handleDelete=(id)=>{
    const olditems=[...this.state.list]
    const ITEMS=olditems.filter((element,i)=>{return i!==id})
    this.setState({list:ITEMS})

  }
  // handleEdit=(id)=>{
    
  //   this.setState(prevState=>({readOnly:!prevState.read}))
  // }
  render(){
    return(
      <div className='container-fluid my-5'>
        <div className="row">
       <div className="mx-auto shadow-lg p-3"><h1 className="text-center">What's your today's plan?</h1>
        
         <div className="row">
          <div className="col-9">
          <input className="form-control" type="text" placeholder="add a list" value={this.state.userInput}  onChange={this.handleChange} onKeyPress={this.onKeyUp}></input><div/>
            </div>
            <div className="col-2"><button className="btn btn-warning" onClick={this.handleAdd}>Add</button>
           </div> 
           <div className="container-fluid">
             <ul className="list-unstyled row m-3">
               {
                 this.state.list.map((value,i)=>{
                   return <List key={i} id={i} value={value} sendData={this.handleDelete} />
                 })
               }
             </ul>
           </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
export default App;
