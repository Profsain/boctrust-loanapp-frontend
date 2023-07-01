import "./TopNavbar.css"

const TopNavber = () => {
  return (
      <div className="Inline">
          <div><h4 id="Title">Dashboard</h4></div>
          <div className="Inline Profile">
              <img src="src/assets/images/notificationicon.png" alt="alert" />
              <div className="Inline UserCard">
                  <p>Femi Akinwade</p>
                    <img src="src/assets/images/smallavater.png" alt="user" />
              </div>
          </div>
    </div>
  )
}

export default TopNavber