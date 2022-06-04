import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "http://localhost:5000/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>
                    <Link to="/" className="btn btn-success">
                        Hi <img src={image} style={{height:50,width:50}}/> {name}
                    </Link> &nbsp;
                    <div className="btnlogin">
                            <button onClick={this.handleLogout} className="btn btn-danger">
                            Logout
                            </button>
                    </div>
                    </>
                )
            }
            else{
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
            }

        }else{
            return(
                <>
                    <div className="btnlogin">
                         <a href="https://github.com/login/oauth/authorize?client_id=9176b4958929e2c28dd6" className="btn btn-info">
                             <span className="glyphicon glyphicon-log-in"></span> Login With Git
                        </a>
                    </div> &nbsp;
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
        /*Github User Profil*/
        if(this.props.location.search){
            if(this.props.location.search.split('=')[0] == '?code'){
                var code = this.props.location.search.split('=')[1]
            }
            if(code){
                let requestedData = {
                    code:code
                }
                fetch(`http://localhost:9800/oauth`,{
                    method: 'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(requestedData)
                })
                .then((res) => res.json())
                .then((data) => {
                    let username = data.name;
                    let img = data.avatar_url;
                    sessionStorage.setItem('uName',username);
                    sessionStorage.setItem('uImg',img);
                    sessionStorage.setItem('loginStatus',true)
                    this.setState({userImg:img,userName:username});

                })
            }
        }
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