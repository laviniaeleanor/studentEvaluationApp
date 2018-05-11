import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { returnRandomStudent } from '../../actions/students'
import { getRandomStudent } from '../../logic/logic'
import Button from 'material-ui/Button'

class RandomStudent extends PureComponent {

  returnRandomStudent = (students) => {
    this.props.returnRandomStudent(getRandomStudent(students))
  }

  render(){
    const {students, randomStudent} = this.props

    return(
      <div>
        <Button
          style={{backgroundColor: 'red', color: '#FFF', marginLeft: 50, marginTop:5, marginBottom: 5 }}
          onClick = {() => this.returnRandomStudent(students)}
        >Ask Random Question</Button>

        <img src={randomStudent.picture} alt={randomStudent.name} className="StudentPicture"/>

        <h2>{randomStudent.name}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  randomStudent: state.randomStudent,
  students: state.students
})

export default connect (mapStateToProps, { returnRandomStudent })(RandomStudent)
