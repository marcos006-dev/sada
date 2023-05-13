export const CardWeater = ({ day }) => {
  return (
    <div className="col-md-4 col-lg-4">
      <div className="card">
        <div className="card-body">
          {/* <!-- <h4 className="card-title">Temp Guide</h4> --> */}
          <div className="d-flex align-items-center flex-row m-t-30">
            <div className="display-5 text-info">
              <i className="wi wi-day-showers"></i>
              <span>
                25<sup>°</sup>
              </span>
            </div>
            <div className="m-l-10">
              <h3 className="m-b-0">{day}</h3>
              <small>Formosa, Argentina</small>
            </div>
          </div>
          <table className="table no-border mini-table m-t-20">
            <tbody>
              <tr>
                <td className="text-muted">Dirección del Norte</td>
                <td className="font-medium">Norte</td>
              </tr>
              <tr>
                <td className="text-muted">Humedad</td>
                <td className="font-medium">83%</td>
              </tr>
              {/* <!-- <tr>
            <td className="text-muted">Pressure</td>
            <td className="font-medium">28.56 in</td>
          </tr>
          <tr>
            <td className="text-muted">Cloud Cover</td>
            <td className="font-medium">78%</td>
          </tr> --> */}
            </tbody>
          </table>
          <ul className="row list-style-none text-center m-t-30">
            <li className="col-3">
              <h4 className="text-info">
                <i className="wi wi-day-sunny"></i>
              </h4>
              <span className="d-block text-muted">09:30</span>
              <h3 className="m-t-5">
                20<sup>°</sup>
              </h3>
            </li>
            <li className="col-3">
              <h4 className="text-info">
                <i className="wi wi-day-cloudy"></i>
              </h4>
              <span className="d-block text-muted">11:30</span>
              <h3 className="m-t-5">
                22<sup>°</sup>
              </h3>
            </li>
            <li className="col-3">
              <h4 className="text-info">
                <i className="wi wi-day-hail"></i>
              </h4>
              <span className="d-block text-muted">13:30</span>
              <h3 className="m-t-5">
                30<sup>°</sup>
              </h3>
            </li>
            <li className="col-3">
              <h4 className="text-info">
                <i className="wi wi-day-sprinkle"></i>
              </h4>
              <span className="d-block text-muted">15:30</span>
              <h3 className="m-t-5">
                28<sup>°</sup>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
