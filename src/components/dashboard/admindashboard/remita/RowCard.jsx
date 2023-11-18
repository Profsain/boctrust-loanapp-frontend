import PropTypes from "prop-types"
import "./Remita.css"

const RowCard = ({title, text}) => {
  return (
      <div className='RowCard'>
          <p className="RowText">{title} <span>{ text}</span></p>
    </div>
  )
}

RowCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
}

export default RowCard