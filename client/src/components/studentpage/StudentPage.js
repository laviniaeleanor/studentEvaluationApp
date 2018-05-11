import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvaluations, updateEvaluation, addEvaluation, updateLatestEvaluation } from '../../actions/evaluations'
import { getStudent, updateStudent } from '../../actions/students'
import { checkDate } from '../../logic/logic'
import StudentForm from '../batchpage/StudentForm'
import EvaluationForm from './EvaluationForm'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

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
      this.setState({
        editEvaluation: !this.state.editEvaluation,
        selectedEvaluation: id
      })
    }

    addEvaluation = (newEvaluation) => {
      if (!checkDate(this.props.evaluations, newEvaluation))  return alert("Only one evaluation per day allowed")

      this.props.addEvaluation(newEvaluation)
      this.props.updateLatestEvaluation(this.props.student.id, newEvaluation)
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
                    <Button onClick={this.toggleEditStudent}>Edit Student Information</Button>
          }
          <br></br>
          {
            this.state.editStudent &&
                    <StudentForm initialValues={student} onSubmit={this.updateStudent} batch={batch}/>
          }
          <div className="PictureAndForm">
            <img src={student.picture} alt={student.name} className='StudentPicture'/>
            {
              !this.state.editEvaluation &&
                    <EvaluationForm onSubmit={this.addEvaluation}/>
            }
          </div>

          <h2>Previous evaluations</h2>

          { evaluations.map(evaluation =>
            <div className= "evaluationsContainer">
              {
                !this.state.editEvaluation &&
                        <div><h3>{evaluation.date} : {evaluation.remarks}</h3><div className="evaluation"
                          style={{backgroundColor: evaluation.evaluation}}>
                        </div>
                        <Button onClick={() => this.toggleEditEvaluation(evaluation.id)}>Edit</Button>
                        </div>
              }

              {
                this.state.editEvaluation && this.state.selectedEvaluation === evaluation.id &&
                        <EvaluationForm initialValues={evaluation} onSubmit={this.updateEvaluation} evaluationId={evaluation.id}/>
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

export default connect (mapStateToProps, {
  getStudent,
  getEvaluations,
  updateStudent,
  updateEvaluation,
  addEvaluation,
  updateLatestEvaluation
})(StudentPage)
