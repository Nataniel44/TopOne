function NavBar() {

    return ( 
        <>
        <nav className="navbar navbar-expand-lg  fixed-top ">
  <div className="container-fluid"> 
    <a className="navbar-brand" href="#">
      
    </a>
  
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text text-end " aria-current="page" href="#">
          <button type="button" className="btn btn-warning bot">Inicio</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text text-end" href="#compra">
          <button type="button" className="btn btn-warning bot">Menú</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text text-end " 
                href="https://wa.me/3755390616"
                target="_blank"
                rel="noreferrer"><div>
                  <button type="button" className="btn btn-warning bot">Contacto</button>
                  </div></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}

export default NavBar ;