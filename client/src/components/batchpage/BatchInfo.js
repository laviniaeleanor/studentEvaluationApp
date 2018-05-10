import React, {PureComponent} from 'react'
import Button from 'material-ui/Button'
import {calculatePercentages} from '../../logic/logic'

const colors = {
  green: 'rgb(102, 187, 106)',
  red: 'rgb(211, 47, 47)',
  yellow: 'rgb(245, 183, 35)',
  grey: 'rgb(117, 117, 117)'
}

export default class BatchInfo extends PureComponent {

  render(){
    const {students} = this.props
    const percentages = calculatePercentages(students)
    console.log(percentages)
    return(
      <div className="BatchInfo">
        <div className = "Percentage" style={{backgroundColor : colors.green}}> {percentages.green}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.yellow}}> {percentages.yellow}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.red}}> {percentages.red}%</div>
        <div className = "Percentage" style={{backgroundColor : colors.grey}}>Not yet evaluated: {percentages.grey}%</div>
      </div>
    )
  }
}
