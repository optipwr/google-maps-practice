// class FormInput extends React.Component {

// }

class Credit extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           value: '',
       }
       this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event) {
       this.setState({
           value: event.target.value
       })
   }

   render() {
       return(
               <div className="form-group">
                   <label>Credit: </label>
                   <input type="text" className="form-control" onChange={this.handleChange} />
               </div>
       )
   }
}

class Bill extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           value: '',
       }
       this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event) {
       this.setState({
           value: event.target.value
       })
   }

   render() {
       return(
               <div className="form-group">
                   <label>Bill: </label>
                   <input type="text" className="form-control" onChange={this.handleChange} />
               </div>
       )
   }
}

function Total(props) {
   return(
       <div className="totaled">
           <div className="totaled-text">
               <span>You owe:</span>
           </div>
       </div>
   )
}

function Form(props) {
   return(
       <div className="form-wrapper">
           <form>
               <Bill />
               <Credit />
           </form>
           <Total />
       </div>
   )
}

ReactDOM.render(
   <Form />,
   document.getElementById('form-wrapper')
)