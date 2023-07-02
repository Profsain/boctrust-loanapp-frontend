

import PropTypes from "prop-types"
const DashboardHeadline = ({bgcolor = "#636363", children}) => {
    const style = {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        margin: '2rem 0 1rem 0',
        padding: '0.7rem',
        borderRadius: '2rem',
        backgroundColor: bgcolor,
    }
  return (
      <div style={style}>{ children}</div>
  )
}

DashboardHeadline.propTypes = {
    children: PropTypes.any,
    bgcolor: PropTypes.string,
}

export default DashboardHeadline