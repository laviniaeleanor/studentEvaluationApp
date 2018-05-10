import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import Paper from 'material-ui/Paper'

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
	  this.props.login(data.email, data.password)
	}

	render() {
	  if (this.props.currentUser) return (
	    <Redirect to="/" />
	  )

	  return (
	    <Paper className="SignIn">
		  <div>
		      <h2>Login</h2>

		      <LoginForm onSubmit={this.handleSubmit} />
		      { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
		  </div>
	    </Paper>
	  )
	}
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error
  }
}

export default connect(mapStateToProps, {login})(LoginPage)
