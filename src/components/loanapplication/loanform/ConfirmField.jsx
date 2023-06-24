import PropTypes from "prop-types"

const ConfirmField = ({ labelName, fieldName, type, values, func }) => {
    const value = values[fieldName];
    
    return (
        <div>
        <label htmlFor={fieldName}>{labelName}:</label>
        <input
            type={type}
            name={fieldName}
            value={value}
            onChange={(e) => func(fieldName, e)}
        />
        </div>
    );
}

ConfirmField.propTypes = {
  fieldName: PropTypes.string,
  func: PropTypes.func,
  labelName: PropTypes.string,
  type: PropTypes.any,
  values: PropTypes.shape({
    fieldName: PropTypes.any
  })
}

export default ConfirmField;
