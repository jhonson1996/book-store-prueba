import { useKeycloak } from '@react-keycloak/web';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function PerfilUser() {
  const {keycloak} = useKeycloak()

  console.log('====================================');
  console.log();
  console.log('====================================');
  return (
    <section className='container-profile'>

      
      <MDBRow className='container-profile-setion'>
      <div className="button-back" style={{marginTop:'8rem', height: '40px' ,position: 'fixed'}}>
        <Link to="/books" className="btn btn-light ">
          Go to back
        </Link>
      </div>
        <MDBCol lg="4" style={{marginTop:'280px',}}>
          <MDBCard className="mb-4">
            <MDBCardBody className="text-center">
              <MDBCardImage
                src={keycloak?.tokenParsed?.picture}
                alt="avatar"
                className="rounded-circle"
                style={{ width: '150px' }}
                fluid />
              <p className="text-muted mb-1">FrontEnd Developer</p>
              <p className="text-muted mb-4">Florencia,Caqueta,COL</p>
              <div className="d-flex justify-content-center mb-2">
                <MDBBtn>Follow</MDBBtn>
                <MDBBtn outline className="ms-1">Message</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>


        </MDBCol>

        <MDBCol lg="6" style={{marginTop:'280px',}}>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{keycloak?.tokenParsed?.name}h</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">{keycloak?.tokenParsed?.email} </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">Florencia,Caqueta,COL</MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
