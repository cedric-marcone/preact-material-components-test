import { h, Component } from 'preact'
import style from './style'

import {Select} from 'preact-material-components'
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';

function range () {
  const xs = []; let i = 0
  for (let i = 0; i < 10; i++) xs.push(i*100)
  return xs
}

export default class Home extends Component {
 state = {
   value: 200,
   values: range(1, 10)
 }

 selectedChanged = () => {
   const selectedIndex = this.select.MDComponent.selectedIndex
   const selectOptions = this.select.MDComponent.selectedOptions
   const selectedValues = Array.from(selectOptions).map(o => o.value)
   console.log(selectedIndex, selectedValues, 'c')
   this.setState({ value: this.indexToValue(selectedIndex) })
 }

 selectedRef = (select) => {
   this.select = select
 }

 valueToIndex = (value) => (
   this.state.values.indexOf(value)
 )

 indexToValue = (index) => (
   this.state.values[index]
 )

  render() {
    return (
      <div class={style.home}>
        <h1>Select test</h1>
        <div>
          <Select style={{width: '100%'}}
            hintText="Select an option"
            ref={this.selectedRef}
            onChange={this.selectedChanged}
            selectedIndex={this.valueToIndex(this.state.value)}
          >
            {
              this.state.values.map(v =>
                v > 0
                  ? <Select.Item value={v}>{`option ${v}`}</Select.Item>
                  : <Select.Item />
              )
            }
          </Select>
        </div>
      </div>
    )
  }
}
