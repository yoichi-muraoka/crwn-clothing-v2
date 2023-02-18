import { FormGroup } from './form-input.styles'

const FormInput = ({ label, forId, ...otherProps }) => {
  return (
    <FormGroup>
      <input className='form-input' id={forId} {...otherProps} />
      <label
        className={`form-input-label ${
          otherProps.value.length > 0 ? 'shrink' : ''
        }`}
        htmlFor={forId}
      >
        {label}
      </label>
    </FormGroup>
  )
}

export default FormInput
