import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getStudents, deleteStudent, addStudent} from '../../actions/students'
import {getBatch} from '../../actions/batches'
import {Link} from 'react-router-dom'
import Button from 'material-ui/Button'
import StudentForm from './StudentForm'
import BatchInfo from './BatchInfo'
import RandomStudent from './RandomStudent'
import Paper from 'material-ui/Paper'

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
            <Paper className="outer-paper">
            <h1>Batch {batch.batchNum}</h1>
            <BatchInfo students={students}/>
            <RandomStudent students={students}/>
            <StudentForm onSubmit={this.props.addStudent} batch={batch}/>
            { students.map(student =>
                <div className= "studentsContainer">
                <Link to={`/students/${student.id}`}><h2>{student.name}</h2></Link>
                <Button onClick={() => this.deleteStudent(student.id)}>Delete Student</Button>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    batch: state.batch,
    students: state.students
})

export default connect (mapStateToProps, {getStudents, getBatch, deleteStudent, addStudent})(BatchPage)
