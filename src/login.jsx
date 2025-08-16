import PropTypes from "prop-types"

function Login(props){

    const welcome = <h2 className="welcome">Welcome {props.userName}</h2>
   const login = <h2 className="login">Please login</h2>

    return props.isLoggedIn ?  welcome: login
}

Login.defaultProps = {
    isLoggedIn : false,
    userName : "Guest"

}

export default Login