import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvaluations, updateEvaluation, addEvaluation, updateLatestEvaluation } from '../../actions/evaluations'
import { getStudent, updateStudent } from '../../actions/students'
import { checkDate } from '../../logic/logic'
import StudentForm from '../batchpage/StudentForm'
import EvaluationForm from './EvaluationForm'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'

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
        <div>
        <Paper className="student-page-main">

          <div className="PictureAndForm">
            <img src={student.picture} alt={student.name} className='student-page-picture'/>
            
          </div>
          <div className="student-page-name-button">
            <h1 class='student-page-studentname'>{student.name}</h1>
            <a className= "edit-student-button" onClick={this.toggleEditStudent}>Edit Student Information</a>
            <br></br>
          {
            this.state.editStudent &&
                    <Dialog open={this.state.editStudent}
                    onClose={this.toggleEditStudent}><StudentForm className="edit-student" initialValues={student} onSubmit={this.updateStudent} batch={batch}/></Dialog>
          }
            <Button
            color="secondary"
            variant="raised"
            className="addStudent"
            style={{ marginLeft: 35, marginTop:55, fontSize:18,  marginBottom: 15 }}>Evaluate Student</Button>
          </div>
        </Paper>

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
       
        </div>
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


//{
//   !this.state.editEvaluation &&
//   <EvaluationForm onSubmit={this.addEvaluation}/>
// }