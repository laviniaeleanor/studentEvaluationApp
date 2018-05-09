import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addEvaluation} from '../../actions/evaluations'
import {getCurrentDate} from '../../logic/logic'


class NewEvaluation extends PureComponent {

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }


    handleChange = (e) => {
        const {name, value} = e.target
        console.log('initial value', this.props.initialValues.id)
        this.setState({
            id: this.props.initialValues.id,
            batch: this.props.student.batch,
            student: this.props.student.id,
            date: getCurrentDate(),
            [name] : value
        })
      };


    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id='date'
                    name='date'
                    label='Evaluation Date'
                    value={this.state.date || initialValues.date || getCurrentDate()}
                    onChange={this.handleChange}
                />
                <TextField
                    id='evaluation'
                    name='evaluation'
                    label='Add an evaluation'
                    value={this.state.evaluation || initialValues.evaluation || ''}
                    onChange={this.handleChange}
                  />
                <TextField
                    id='remarks'
                    name='remarks'
                    label='Remarks'
                    value={this.state.remarks || initialValues.remarks || ''}
                    onChange={this.handleChange}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="addStudent"
                >
                    Add Evaluation
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
        student: state.student
	}
}

export default connect(mapStateToProps)(NewEvaluation)
