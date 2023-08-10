
import NavBar from './NavBar';
import  { useRef } from 'react';
import Hamburguesas from './Menu';

const Page1 = () => {
  const hamburguesasRef = useRef(null);

  const scrollToHamburguesas = () => {
    hamburguesasRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar/>  
      <main className="bg-custom1 border-bottom border-2 border-dark  ">
        <section className="d-flex flex-column align-items-center justify-content-center vh-100 mt-3">
          <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center ">
            <img src="./img/33.jpg" alt="logo" className=" rounded-circle logo wm-50" />
          </div>
         
          <h1 className="text-center text-light display-1 text-black subtext textled">
            Top One Burgers
          </h1>
          <div className="col-7 p-3< ">
            <p className="text-dark text-center subtext h5  ">
              Las mejores hamburguesas de la ciudad.
            </p>
          </div>
          <div className="text-center d-flex gap-3 flex-wrap justify-content-center">
          <button className="btn btn-warning" onClick={scrollToHamburguesas}>
              Menú de hamburguesas!
            </button>
            <button className="btn btn-warning">
              <a
                href="https://wa.me/3755390616"
                target="_blank"
                rel="noreferrer"
                >
                <i className="fab fa-whatsapp fa-lg text-black"></i>
              </a>
            </button>
          </div>
        </section>
        <div ref={hamburguesasRef} className='pt-5' id='compra'>
          
        </div>

      </main>
      
        <Hamburguesas />
      
      <footer className="bg-dark text-light py-4 text-center" >
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12">
        <ul className="list-inline mb-2">
          <li className="list-inline-item">
            <a href="https://wa.me/3755390616" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp fa-lg text-light"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/top_one_burgers/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-lg text-light"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12">
        <p>© 2023 Top One Burger</p>
        <ul className="list-inline mb-0 ">
          <p className='m-0'>Contacto del creador de la web.</p>
          <a href="https://www.linkedin.com/in/nataniel-soto-52922726a/" className='text-decoration-none subtext'>
              <h5>
                By:
                Nata.st44
              </h5>
          </a>
          <li className="list-inline-item ">
            <a href="https://www.instagram.com/nata.st44/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-lg text-light"></i>
            </a>
          </li>
        
          <li className="list-inline-item ">
            <a href="https://www.linkedin.com/in/nataniel-soto-52922726a/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin fa-lg text-light"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>


              
    </>
  );
};

export default Page1;
