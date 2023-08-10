function NavBar() {

    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light                                                                             border-bottom border-2 border-dark fixed-top bg-cont">
  <div className="container-fluid"> 
    <a className="navbar-brand" href="#">
      <img src="./img/logo.jpg" alt="" width="100" height="50"/>
    </a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text " aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text" href="#compra">Menú</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text" 
                href="https://wa.me/3755390616"
                target="_blank"
                rel="noreferrer">Contacto</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default NavBar ;