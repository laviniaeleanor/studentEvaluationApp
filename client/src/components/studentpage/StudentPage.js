import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudent, updateStudent} from '../../actions/students'
import {getEvaluations, updateEvaluation, addEvaluation, updateLatestEvaluation} from '../../actions/evaluations'
import {checkDate} from '../../logic/logic'
import StudentForm from '../batchpage/StudentForm'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'
import NewEvaluation from './NewEvaluation'

class StudentPage extends PureComponent {

    state = {
      editStudent: false,
      editEvaluation: false,
      selectedEvaluation: 0
    }

    componentWillMount(){
      this.props.getStudent(this.props.match.params.id)
      this.props.getEvaluations(this.props.match.params.id)
    }

    toggleEditStudent = () => {
      this.setState({
        editStudent: !this.state.editStudent
      })
    }

    toggleEditEvaluation = (id) => {
      console.log(id)
      this.setState({
        editEvaluation: !this.state.editEvaluation,
        selectedEvaluation: id
      })
    }

    addEvaluation = (newEvaluation) => {
      if (!checkDate(this.props.evaluations, newEvaluation))  return alert("Only one evaluation per day allowed")
      this.props.addEvaluation(newEvaluation)
      this.props.updateLatestEvaluation(this.props.student.id, newEvaluation)
      console.log('You submitted')
    }

    updateStudent = (student) => {
      this.props.updateStudent(this.props.match.params.id, student)
      this.toggleEditStudent()
    }

    updateEvaluation = (evaluation) => {
      this.props.updateEvaluation(evaluation.id, evaluation)
      this.toggleEditEvaluation(evaluation.id)
    }

    render(){
      const {batch, student, evaluations} = this.props

      return(
        <Paper className="outer-paper">
          <h1>{student.name}</h1>
          {
            !this.state.editStudent &&
                    <Button onClick={this.toggleEditStudent}>Edit</Button>
          }

          {
            this.state.editStudent &&
                    <StudentForm initialValues={student} onSubmit={this.updateStudent} batch={batch}/>
          }
          {
            !this.state.editEvaluation &&
                    <NewEvaluation onSubmit={this.addEvaluation}/>
          }

          { evaluations.map(evaluation =>
            <div className= "evaluationsContainer">
              {
                !this.state.editEvaluation &&
                        <div><h2>{evaluation.date} : {evaluation.evaluation}</h2>
                          <Button onClick={() => this.toggleEditEvaluation(evaluation.id)}>Edit</Button></div>
              }

              {
                this.state.editEvaluation && this.state.selectedEvaluation === evaluation.id &&
                        <NewEvaluation initialValues={evaluation} onSubmit={this.updateEvaluation} evaluationId={evaluation.id}/>
              }
            </div>
          )}
        </Paper>
      )
    }
}

const mapStateToProps = (state) => ({
  student: state.student,
  evaluations: state.evaluations,
  batch: state.batch
})

export default connect (mapStateToProps, {getStudent, getEvaluations, updateStudent, updateEvaluation, addEvaluation, updateLatestEvaluation})(StudentPage)
