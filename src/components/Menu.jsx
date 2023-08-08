import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const hamburguesasData = [
  {
    nombre: 'Classic',
    precio: 1000,
    imagen: './img-redux/classic.jpg',
  },
  {
    nombre: 'Argenta',
    precio: 1200,
    imagen: './img-redux/argen.jpg',
  },
  {
    nombre: 'Veggie',
    precio: 1000,
    imagen: './img-redux/veggie.jpg',
  },
  {
    nombre: 'Rúcula y parmesano',
    precio: 1200,
    imagen: './img-redux/rucula.jpg',
  },
  {
    nombre: 'Chesse',
    precio: 700,
    imagen: './img-redux/cheese.jpg',
  },
  {
    nombre: 'Top One',
    precio: 1200,
    imagen: './img-redux/topone.jpg',
  },
  {
    nombre: 'Hulk',
    precio: 1700,
    imagen: './img-redux/hulk1.jpg',
  },
  // Agrega más hamburguesas aquí
];

const Hamburguesas = () => {
  const [carrito, setCarrito] = useState([]);
  const [showArrow, setShowArrow] = useState(false); // Estado para controlar la visibilidad de la flecha

  const compraSectionRef = useRef(null); // Referencia a la sección de compra

  const agregarAlCarrito = (nombre, precio) => {
    const elementoExistente = carrito.find((item) => item.nombre === nombre);
    if (elementoExistente) {
      const nuevoCarrito = carrito.map((item) =>
        item.nombre === nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { nombre, precio, cantidad: 1 }]);
    }
  };

  const restarDelCarrito = (nombre) => {
    const hamburguesaAEliminar = carrito.find((item) => item.nombre === nombre);
    if (hamburguesaAEliminar) {
      if (hamburguesaAEliminar.cantidad === 1) {
        setCarrito((prevCarrito) =>
          prevCarrito.filter((item) => item.nombre !== nombre)
        );
      } else {
        setCarrito((prevCarrito) =>
          prevCarrito.map((item) =>
            item.nombre === nombre
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          )
        );
      }
    }
  };

  const calcularPrecioTotal = () => {
    return carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
  };

  const realizarPedido = () => {
    let mensaje = '¡Hola! Quiero realizar el siguiente pedido:\n\n';
    carrito.forEach((item) => {
      mensaje += `${item.nombre} - $${item.precio} - Cantidad: ${item.cantidad}\n`;
    });

    mensaje += `\nPrecio total: $${calcularPrecioTotal()}`;

    const numeroWhatsapp = '3755390616'; // Reemplaza con tu número de WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(urlWhatsapp);
  };

  useEffect(() => {
    setShowArrow(carrito.length > 0 && hamburguesasData.length > 0);
  }, [carrito, hamburguesasData]);

  // Función para manejar el clic en la flecha y llevar al usuario a la sección de compra
  const handleArrowClick = () => {
    compraSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-custom2 shadow p-1 d-flex align-items-center justify-content-center container">
        <Link to="/#" className=" btn text ">
          Top One Burgers
        </Link>
      </header>
      <main className="bg-custom1 container shadow">
        <div className="container py-4 text-center">
          <div className="bg-cont p-3">
            <h1 className="subtext">Menú</h1>

            <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 g-3">
              {hamburguesasData.map((hamburguesa, index) => (
                <div
                  className="col"
                  key={index}
                  onClick={() =>
                    agregarAlCarrito(hamburguesa.nombre, hamburguesa.precio)
                  }
                >
                  <div className="card bg-warning ">
                    <img
                      src={hamburguesa.imagen}
                      className="card-img-top img-fluid"
                      alt={hamburguesa.nombre}
                    />
                    <div className="card-body  text-light">
                      <h5 className="card-title">{hamburguesa.nombre}</h5>
                      <p className="card-text">{hamburguesa.descripcion}</p>
                      <p className="card-text">Precio: ${hamburguesa.precio}</p>
                      <button className="btn btn-secondary bg-light-50">
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4" ref={compraSectionRef} id="compra">
              <h3>Carrito de Compras</h3>
              {carrito.length === 0 ? (
                <div className="div d-flex justify-content-center">
                  <p className="bg-danger border border-secondary p-1">
                    Tu carrito está vacío
                  </p>
                </div>
              ) : (
                <ul className="list-group">
                  {carrito.map((item, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={index}
                    >
                      <span>
                        {item.nombre} - ${item.precio} - Cantidad:{' '}
                        {item.cantidad}
                      </span>
                      <button
                        className="btn btn-danger"
                        onClick={() => restarDelCarrito(item.nombre)}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {carrito.length > 0 && (
                <div className="mt-4">
                  <h4>Precio Total: ${calcularPrecioTotal()}</h4>
                  <button className="btn btn-success" onClick={realizarPedido}>
                    Realizar Pedido por WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Agregamos la flecha que aparecerá cuando haya elementos en el carrito */}
      {showArrow && (
        <div className="arrow-wrapper" onClick={handleArrowClick}>
          <div className="arrow">&#8595;</div>
        </div>
      )}

      <footer className="bg-custom2 shadow p-1 d-flex align-items-center justify-content-center container">
        <div className="row">
          <div className="col-6">
            <a href="https://wa.me/3755390616" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp fa-lg text-black"></i>
            </a>
          </div>
          <div className="col-6">
            <a
              href="https://www.instagram.com/top_one_burgers/"
              target="_blank"
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

export default Hamburguesas;