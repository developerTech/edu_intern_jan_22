import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "http://localhost:5000/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo',outArray)
            sessionStorage.setItem('loginStatus',true)
            return(
                <>
                <div className="btnlogin">
                         <Link to="/" className="btn btn-success">
                             <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                        </Link>
                    </div> &nbsp;
                   <div className="btnlogin">
                        <button onClick={this.handleLogout} className="btn btn-danger">
                        Logout
                        </button>
                   </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="btnlogin">
                         <Link to="/login" className="btn btn-success">
                             <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </div> &nbsp;
                   <div className="btnlogin">
                        <Link to="/register" className="btn btn-primary">
                        <span className="glyphicon glyphicon-user"></span> Register</Link>
                   </div>
                </>
            )
        }
    }

    render(){
        return (
            <header>
                <div id="icon">
                    <h1>Zomato</h1>
                    
                </div>
                <Link to="/" className="btn btn-info btnclass">Home</Link>

                <div id="social">
                    {this.conditionalHeader()}
                    
                </div>
            </header>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}

export default withRouter(Header)