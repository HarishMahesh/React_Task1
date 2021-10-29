import "./Card.css";

function Card(props) {
  return (
    <div className="col-lg-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-type">{props.type}</h5>
          <h6 className="card-price">
            ${props.rate}
            <span className="period">/month</span>
          </h6>
          <hr></hr>
          <div className="list-items">
            {props.user == "Single User" ? (
              <p>
                <i class="fas fa-check"></i> <span>{props.user}</span>
              </p>
            ) : (
              <p>
                <i class="fas fa-check"></i>{" "}
                <b>
                  <span>{props.user}</span>
                </b>
              </p>
            )}
            <p>
              <i class="fas fa-check"></i> <span>{props.storage}</span>
            </p>
            {props.publicProjects ? (
              <p>
                <i class="fas fa-check"></i>
                <span> Unlimited Public Projects</span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Unlimited Public Projects</span>
              </p>
            )}
            {props.comAccess ? (
              <p>
                <i class="fas fa-check"></i>
                <span> Community Access</span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Community Access</span>
              </p>
            )}
            {props.privateProjects ? (
              <p>
                <i class="fas fa-check"></i>
                <span> Unlimited Private Projects</span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Unlimited Private Projects</span>
              </p>
            )}
            {props.phoneSup ? (
              <p>
                <i class="fas fa-check"></i>
                <span> Dedicated Phone Support</span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Dedicated Phone Support</span>
              </p>
            )}
            {props.subDomain ? (
              <p>
                <i class="fas fa-check"></i>
                <span>
                  <b> {props.subDomain}</b> Free Subdomain
                </span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Free Subdomain</span>
              </p>
            )}
            {props.reports ? (
              <p>
                <i class="fas fa-check"></i>
                <span> Monthly Status Reports</span>
              </p>
            ) : (
              <p className="disable">
                <i class="fas fa-times"></i>
                <span> Monthly Status Reports</span>
              </p>
            )}
          </div>
          <button className="button">BUTTON</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
