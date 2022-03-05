import { Component } from "react";
import TodoItem from "./TodoItem";


class Todo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         profile:[],
         value: "",
         list: ['listen to music', 'working in office'],
         currentUser: " ",
      };
      this.addTodo = this.addTodo.bind(this);
     
   }
   farbodLoad(){
      fetch('/todo_farbod.json')
      .then(response => response.json())
      .then(data => {
         const todos = data.map(item => item.todo)
         this.setState({profile: [...todos,...this.state.profile]})
         console.log(this.state.profile)
   })}
   harryLoad(){
      fetch('/todo.json')
      .then(response => response.json())
      .then(data => {
         const todos = data.map(item => item.todo)
         this.setState({profile:[...todos,...this.state.profile]})
         console.log(this.state.profile);
   })}

   // componentDidMount() {
   //    // fetch('/todo.json')
   //       // .then(response => response.json())
   //       // .then(data => {
   //       //    const todos = data.map (item => item.todo)
   //       //    this.setState({list: [...todos,...this.state.list]})
   //         this.harryLoad()
   //    }
      

   addTodo() {
      this.setState({
         list: [this.state.value, ...this.state.list],
         value: " ",
      });
   }

   change = e => {
      this.setState({value: e.target.value})
   } 

   removeTodo(todoIndex) {
      let list = this.state.list.filter((item, index) => index !== todoIndex)
      this.setState({list: list})
   }

   componentDidUpdate(prevProps,prevState){
      let currentUser= this.props.user
      console.log(currentUser); 
      console.log(prevProps)
     
      if(currentUser!== prevProps.user){
         if(currentUser==="1"){
            this.harryLoad()
         }else{
            this.farbodLoad()}
            
      }
}


   render() {
      return (
      <div> <ul className="todo-list">
            <li>
               <label> harry</label>
               <input id="1"  name="data" type="radio" onChange={(e)=>{this.setState({currentUser:e.target.id})}}/>
             {/* {console.log(this.state.currentUser)} */}
               <label> farbod</label> 
               <input id="2"  name="data" type="radio" onChange={(e)=>{this.setState({currentUser:e.target.id})}}/>
               {/* <br/> {console.log(this.state.currentUser)} */}
               <input
                  type="text"
                  value={this.state.value}
                  onChange={this.change}
               />
               <button onClick={this.addTodo}>add</button>
            </li>
            {this.state.list.map((todo, i) => <TodoItem className="todo-list__items"
               index = {i+1}
               title = {todo}
               remove = {()=>this.removeTodo(i)}
            />)}
         </ul>
         <div>
            {this.state.profile.map((item,id)=><div key={id}>{item}</div>)}
         </div>
         </div>
      );
   }
}
export default Todo;
