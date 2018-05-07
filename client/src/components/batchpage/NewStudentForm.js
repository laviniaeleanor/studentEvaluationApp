import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addStudent} from '../../actions/batches'


class NewStudentForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStudent(this.state)
    }


    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            batch: this.props.batch.id,
            [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='name'
                    name='name'
                    label='Student Name'
                    value={this.state.name || ''}
                    onChange={this.handleChange}
                />
                <TextField
                  id='picture'
                  name='picture'
                  label='Add a picture'
                  value={this.state.picture || ''}
                  onChange={this.handleChange}
                  />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="addStudent"
                >
                    Add Student
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        batch: state.batch
	}
}

export default connect(mapStateToProps, {addStudent})(NewStudentForm)
