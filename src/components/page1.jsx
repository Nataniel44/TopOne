import NavBar from './NavBar';
import { useRef } from 'react';
import Hamburguesas from './Menu';

const Page1 = () => {
  const hamburguesasRef = useRef(null);

  const scrollToHamburguesas = () => {
    hamburguesasRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar />
      <main className="fondomain border-bottom border-2 border-dark fondopc ">
        <section className="d-flex flex-column align-items-center justify-content-center vh-100 ">
          <h1 className="text-center  display-1   letralogo text-warning d-flex flex-wrap flex-column ">
            Top One <br />{' '}
            <span className=" display-4  text-dark"> Burger's</span>
          </h1>
          <div className="col-7 p-3< ">
            <p className="text-light text-center subtext  fs-5 ">
              Las mejores <span className="text-warning"> hamburguesas</span>{' '}
              <br /> de la ciudad.
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
        <div ref={hamburguesasRef} className="" id="compra"></div>
      </main>

      <Hamburguesas />

      <footer className="bg-dark text-light py-4 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <ul className="list-inline mb-2">
                <li className="list-inline-item">
                  <a
                    href="https://wa.me/3755390616"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp fa-lg text-light"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/top_one_burgers/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram fa-lg text-light"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <p>© 2023 Top One Burger</p>
              <ul className="list-inline mb-0 ">
                <p className="m-0">Contacto del creador de la web.</p>
                <a
                  href="https://www.linkedin.com/in/nataniel-soto-52922726a/"
                  className="text-decoration-none subtext"
                >
                  <h5>By: Nataniel Soto</h5>
                </a>
                <li className="list-inline-item ">
                  <a
                    href="https://www.instagram.com/nata.st44/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram fa-lg text-light"></i>
                  </a>
                </li>

                <li className="list-inline-item ">
                  <a
                    href="https://www.linkedin.com/in/nataniel-soto-52922726a/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
