import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStudents, deleteStudent, addStudent } from '../../actions/students'
import { getBatch } from '../../actions/batches'
import { getEvaluationColor } from '../../logic/logic'
import { colors } from '../../constants'
import StudentForm from './StudentForm'
import BatchInfo from './BatchInfo'
import RandomStudent from './RandomStudent'
import Button from 'material-ui/Button'
import Card from 'material-ui/Card';

class BatchPage extends PureComponent {

  componentWillMount(){
    this.props.getBatch(this.props.match.params.id)
    this.props.getStudents(this.props.match.params.id)
  }

    deleteStudent = (studentId) => {
      this.props.deleteStudent(studentId)
    }


    render(){
      const {batch, students} = this.props

      return(
        <div className="BatchPage">

          <h1>Batch #{batch.batchNum}</h1>

          <BatchInfo students={students}/>

          <Card className='outer-paper newBatch'>
            <StudentForm onSubmit={this.props.addStudent} batch={batch}/>
          </Card>

          <div className="StudentContainer">

            <Card className= "studentCard" id="RandomStudent">
              <RandomStudent students={students}/>
            </Card>

            { students.map(student =>
              <Card className= "studentCard" key={student.id}>

                <div className="PictureContainer">
                  <Link to ={`/students/${student.id}`}> <img className="StudentPicture" src={student.picture} alt={student.name}/></Link>
                </div>

                <h2 style={{fontFamily: "Poppins", marginLeft: 14, marginRight: 5}}>{student.name}</h2>

                <Button onClick={() => this.deleteStudent(student.id)}>Delete Student</Button>

                <div className="evaluation-bottom" style={{backgroundColor: getEvaluationColor(student.latestEvaluation, colors), marginTop: -6}}></div>

              </Card>
            )}
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  batch: state.batch,
  students: state.students
})

export default connect (mapStateToProps, {
  getStudents, 
  getBatch, 
  deleteStudent, 
  addStudent 
})(BatchPage)
