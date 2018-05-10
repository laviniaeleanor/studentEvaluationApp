import React, {PureComponent} from 'react'
import Button from 'material-ui/Button'
import {calculatePercentages} from '../../logic/logic'

export default class BatchInfo extends PureComponent {

  render(){
    const {students} = this.props
    const percentages = calculatePercentages(students)
    console.log(percentages)
    return(
      <div className="BatchInfo">
        <Button className = "Percentage"> {percentages.green}%</Button>
        <Button className = "Percentage"> {percentages.yellow}%</Button>
        <Button className = "Percentage"> {percentages.red}%</Button>
        <Button className = "Percentage">Not yet evaluated: {percentages.grey}%</Button>
      </div>
    )
  }
}
