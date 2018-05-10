import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import {getRandomStudent} from '../../logic/logic'
import {returnRandomStudent} from '../../actions/students'

class RandomStudent extends PureComponent {

  returnRandomStudent = (students) => {
    this.props.returnRandomStudent(getRandomStudent(students))
  }

  render(){
    const {students} = this.props

    return(
      <Paper className="outer-paper">
        <Button className ="getRandomStudent"
          onClick = {() => this.returnRandomStudent(students)}
        >Ask Random Question</Button>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  students: state.students
}

export default connect (mapStateToProps, {returnRandomStudent})(RandomStudent)
