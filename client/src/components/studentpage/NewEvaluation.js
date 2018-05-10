import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {updateLatestEvaluation} from '../../actions/evaluations'
import {Link} from 'react-router-dom'
import {getCurrentDate, getNextStudent} from '../../logic/logic'
import {colors} from '../../constants'

class NewEvaluation extends PureComponent {

    state = {}

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }


    handleChange = (e) => {
      const {name, value} = e.target

      if (this.props.initialValues)
        this.setState({
          id: this.props.initialValues.id,
          batch: this.props.student.batch,
          student: this.props.student.id,
          date: getCurrentDate(),
          [name] : value
        })

      this.setState({
        batch: this.props.student.batch,
        student: this.props.student.id,
        date: getCurrentDate(),
        [name] : value
      })

      console.log(this.state)
    };


    render() {
      const initialValues = this.props.initialValues || {}
      const nextStudent = getNextStudent(this.props.students, this.props.student)

      return(
        <form onSubmit={this.handleSubmit}>
          <div className="Buttons">
            <Button
              style={{backgroundColor: colors.green, color: '#FFF', margin: 15, padding: 16}}
              name = "evaluation"
              value="green"
              onClick={this.handleChange}
            >Good</Button>
            <Button
              style={{backgroundColor: colors.yellow, color: '#FFF', margin: 15, padding: 16}}
              name = "evaluation"
              value="yellow"
              onClick={this.handleChange}
            >Medium</Button>
            <Button
              style={{backgroundColor: colors.red, color: '#FFF', margin: 15, padding: 16}}
              name = "evaluation"
              value="red"
              onClick={this.handleChange}
            >Negative</Button>
          </div>
          <TextField
            id='date'
            name='date'
            label='Evaluation Date'
            value={this.state.date || initialValues.date || getCurrentDate()}
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
          >Save
          </Button>
          { nextStudent &&
          <Button
            type='submit'
            color="secondary"
            variant="raised"
            className="addStudent"
          ><Link to = {`/students/${nextStudent.id}`}>Save and Next</Link>
          </Button>}
        </form>
      )
    }
}


const mapStateToProps = function (state) {
  return {
    evaluations: state.evaluations,
    student: state.student,
    students: state.students
  }
}

export default connect(mapStateToProps, {updateLatestEvaluation})(NewEvaluation)
