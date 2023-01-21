import './form-input.styles.scss'

const FormInput = ({label, forId, ...otherProps}) => {
  return (
    <div className='group'>
      <input className='form-input' id={forId} {...otherProps} />
      <label className={`form-input-label ${otherProps.value.length > 0 ? 'shrink' : ''}`} htmlFor={forId}>{label}</label>
    </div>
  )
}

export default FormInput