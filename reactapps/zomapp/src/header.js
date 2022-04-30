import React,{Component} from 'react';

class Header extends Component {

    render(){
        return (
            <React.Fragment>
                <hr/>
                <center>
                    <h3>&copy; Developer Funnel {props.year} {props.month}</h3>
                </center>
            </React.Fragment>
        )
    }
    
}

export default Header;