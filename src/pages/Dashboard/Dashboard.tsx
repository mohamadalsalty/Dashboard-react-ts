import './styles.css'

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h3>Dashboard</h3>

        <div className="filterbox">

          <select name="" id="">
            <option>Hoje</option>
          </select>

          <select name="" id="">
            <option>Todos os produtos</option>
          </select>

        </div>

      </div>

      <div className="content">
        <div className="reports">

          <div className="report-section-1">
            <div className="today-report">
              <h3>Todays-report</h3>
            </div>


            <div className="credit-card">
              <h3>Credit Card: </h3>
              <span>50%</span>
            </div>


            <div className="paypal">
              <h3>Paypal: </h3>
              <span>40%</span>
            </div>


          </div>

          <div className="report-section-2">
            test
          </div>
        </div>
      </div>
    </div>
  )
}
