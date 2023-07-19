import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <>
      <header className="bg-custom2 shadow p-3 ">
        <p className="m-0 "></p>
      </header>
      <main className="bg-custom1 ">
        <section className="d-flex flex-column align-items-center justify-content-center justify-content-center custom-h">
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center  ">
            <img src="./img/33.jpg" alt="" className=" rounded-circle logo" />
          </div>
          <h1 className="text-center text-light display-1 text-black">
            Top One Burgers
          </h1>
          <div className="col-7 mx-auto">
            <p className="text-light text-center text-white-50 text-wrap">
              <small>Las mejores hamburguesas de la ciudad.</small>
            </p>
          </div>
          <div className="text-center d-flex gap-3 flex-wrap justify-content-center">
            <Link to="/menu" className="btn btn-warning">
              Menu de hamburguesas!
            </Link>
            <button className="btn btn-warning">Nuestro WhatsApp!</button>
          </div>
        </section>
      </main>
      <footer className="bg-custom2 d-flex gap-3 flex-wrap justify-content-center align-items-center">
        <div className="row">
          <div className="col-6">
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp fa-lg text-black"></i>
            </a>
          </div>
          <div className="col-6">
            <a
              href="https://www.instagram.com/tu_usuario/"
              target="_blank "
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-lg text-black"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page1;
