import React from "react";

function Footer() {
  return (
    <footer className="footer-style">
        <div className="row">
          <div className="col-md-4 footer-col">
            <h3>Dirección</h3>
            <p>
              CABA - Argentina <br />
              carrasco 400
            </p>
          </div>
          <div className="col-md-4 footer-col">
            <h3>Mis redes</h3>
            <ul className="list-inline">
              <li>
                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
              </li>
              <li>
                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
              </li>
              <li>
                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
              </li>
              <li>
                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
              </li>
              <li>
                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-col">
            <h3>Trabajo FreeLancer</h3>
            <p>Tengo más de X años de experiencia en maquetación web y me apasiona lo que hago!</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
