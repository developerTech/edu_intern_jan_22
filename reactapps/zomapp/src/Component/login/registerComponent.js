import React,{Component} from 'react';
import Header from '../../header.js'

const url = "http://localhost:5000/api/auth/register";

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <>
                <Header/>
            
            <div className="container">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                           
                        </div>
                        <button className="btn btn-success" onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default Register