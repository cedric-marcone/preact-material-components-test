import { h, Component } from 'preact'

import { Select, Textfield, Formfield } from 'preact-material-components'
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
import 'preact-material-components/Textfield/style.css';
import 'preact-material-components/Formfield/style.css';
import style from './style'

const generate = () => {
  const xs = []; let i = 0
  for (let i = 0; i < 10; i++) xs.push(i*100)
  return xs
}

export default class Home extends Component {
  state = {
    value: 200,
    values: generate(),
    lastname: '',
    firstname: ''
  }

  selectedChanged = (e) => {
    const selectedIndex = e.selectedIndex
    const selectOptions = e.selectedOptions
    const selectedValues = Array.from(selectOptions).map(o => o.value)
    console.log(selectedValues)
    this.setState({ value: this.indexToValue(selectedIndex) })
  }

  valueToIndex = (value) => (
    this.state.values.indexOf(value)
  )

  indexToValue = (index) => (
    this.state.values[index]
  )

  render() {
    const fieldStyle = { width: '100%' }
    const inputStyle = { display: 'flex' }

    return (
      <div class={style.home}>
        <h1>Select test</h1>
        <form>
          <Formfield className={style.customerField}>
            <Textfield
              className={style.fullWidth}
              label="Nom"
              hintText="Entrez votre nom"
              value={this.state.lastname}
              required
            />
          </Formfield>
          <Formfield className={style.customerField}>
            <Textfield
              className={style.fullWidth}
              label="Prénom"
              value={this.state.firstname}
              required
            />
          </Formfield>
          <Formfield className={style.customerField}>
            <Select
              className={style.fullWidth}
              hintText="Select an option"
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
          </Formfield>
        </form>
      </div>
    )
  }
}
