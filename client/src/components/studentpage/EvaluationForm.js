import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateLatestEvaluation } from '../../actions/evaluations'
import { getCurrentDate, getNextStudent } from '../../logic/logic'
import { colors } from '../../constants'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button';

class EvaluationForm extends PureComponent {

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
    };


    render() {
      const initialValues = this.props.initialValues || {}
      const nextStudent = getNextStudent(this.props.students, this.props.student)

      return(
        <form onSubmit={this.handleSubmit}>

          <div className="Buttons">
            <button
             className = "evaluation-buttons green"
              name = "evaluation"
              value="green"
              onClick={this.handleChange}
            >Good</button>

            <button
              className = "evaluation-buttons yellow"   
              name = "evaluation"
              value="yellow"
              onClick={this.handleChange}
            >Medium</button>

            <button
              className = "evaluation-buttons red"            
              name = "evaluation"
              value="red"
              onClick={this.handleChange}
            >Negative</button>
          </div>

          <div className='evaluation-date-remark'>
          <TextField
            id='remarks'
            name='remarks'
            label='Remarks'
            value={this.state.remarks || initialValues.remarks || ''}
            onChange={this.handleChange}
            style={{marginRight: 35, width: 300}}
          />

            <TextField
              id='date'
              name='date'
              label='Evaluation Date'
              value={this.state.date || initialValues.date || getCurrentDate()}
              onChange={this.handleChange}
              style={{marginRight: 35, width: 300}}
            />

            <Button
              type='submit'
              color="secondary"
              variant="raised"
              className="addStudent"
              style={{marginRight: 35}}
            >Save
            </Button>
          </div>

        </form>
      )
    }
}


const mapStateToProps = (state) => ({
  evaluations: state.evaluations,
  student: state.student,
  students: state.students
})


export default connect(mapStateToProps, {updateLatestEvaluation})(EvaluationForm)
