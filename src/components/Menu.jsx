import { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Importa la librería axios
const hamburguesasData = [
  {
    nombre: 'Classic',
    precio: 1200,
    imagen: './img-redux/classic.jpg',
    ingredientes:
      'Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.',
  },
  {
    nombre: 'Argenta',
    precio: 1400,
    imagen: './img-redux/argen.jpg',
    ingredientes:
      'Pan, medallon de carne, huevo, queso provoleta, salsa criolla, aderezos.',
  },

  {
    nombre: 'Rúcula y parmesano',
    precio: 1400,
    imagen: './img-redux/rucula.jpg',
    ingredientes:
      'Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.',
  },
  {
    nombre: 'Chesse',
    precio: 800,
    imagen: './img-redux/cheese.jpg',
    ingredientes: 'Pan, medallon de carne, queso cheddar.',
  },
  {
    nombre: 'Top One',
    precio: 1400,
    imagen: './img-redux/topone.jpg',
    ingredientes:
      'Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.',
  },
  {
    nombre: 'Hulk',
    precio: 1900,
    imagen: './img-redux/hulk1.jpg',
    ingredientes:
      'Pan, medallon de carne, queso, jamón, huevo, tomate, lechuga, aderezos.',
  },
  // Agrega más hamburguesas aquí
];

const Hamburguesas = () => {
  const [carrito, setCarrito] = useState([]);
  const [showArrow, setShowArrow] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [orden, setOrden] = useState('mayor'); // Estado para controlar el orden de la lista

  const [blueExchangeRate, setBlueExchangeRate] = useState(0); // Estado para almacenar el valor del dólar blue

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
  const hamburguesasDataUpdated = hamburguesasData.map((hamburguesa) => ({
    ...hamburguesa,
    precioDolar: hamburguesa.precio / blueExchangeRate,
  }));

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
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          'https://api.bluelytics.com.ar/v2/latest'
        );
        const blueRate = response.data.blue.value_sell; // Puedes usar value_avg, value_sell o value_buy según tu necesidad
        setBlueExchangeRate(blueRate);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, []);
  useEffect(() => {
    setShowArrow(carrito.length > 0 && hamburguesasData.length > 0);
  }, [carrito, hamburguesasData]);

  // Función para manejar el clic en la flecha y llevar al usuario a la sección de compra
  const handleArrowClick = () => {
    compraSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para filtrar las hamburguesas por nombre
  const filtrarHamburguesas = (hamburguesa) => {
    return hamburguesa.nombre.toLowerCase().includes(filtro.toLowerCase());
  };

  // Función para ordenar las hamburguesas por precio de mayor a menor
  const ordenarHamburguesas = (a, b) => {
    if (orden === 'mayor') {
      return b.precio - a.precio;
    } else {
      return a.precio - b.precio;
    }
  };

  return (
    <>
      <section className=" container  " id="menu">
        <div className="text-center mb-3">
          <div className=" fondo bg-light text-dark rounded text-light m-0 mb-2 mt-2 p-1 sombra1">
            <h1 className=" display-3 m-1 text ">Menú</h1>
            <div className="row  ms-3 me-3 mb-1">
              <div className=" col-6 d-flex align-items-center justify-content-center ">
                <input
                  type="text"
                  className="form-control border-dark w-75"
                  placeholder="Buscar..."
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                />
              </div>
              <div className="col-6 p-0 d-flex align-items-center justify-content-center column  text text-dark">
                <div
                  className={`me-3 ms-3 arrow-radio ${
                    orden === 'mayor' ? 'selected' : ''
                  }`}
                  onClick={() => setOrden('mayor')}
                  id=""
                >
                  <span className="s">&uarr; Mayor precio</span>
                </div>
                <div
                  className={` arrow-radio ${
                    orden === 'menor' ? 'selected' : ''
                  }`}
                  onClick={() => setOrden('menor')}
                >
                  <span className="s"> &darr; Menor precio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fondo p-3 sombra1 p-3 bg-body rounded  ">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 ">
              {hamburguesasDataUpdated
                .filter(filtrarHamburguesas)
                .sort(ordenarHamburguesas)
                .map((hamburguesa, index) => (
                  <div
                    className="col"
                    key={index}
                    onClick={() =>
                      agregarAlCarrito(hamburguesa.nombre, hamburguesa.precio)
                    } // Agrega el precio en pesos al carrito
                  >
                    <div className="card bg-warning sombra border-0 ">
                      <img
                        src={hamburguesa.imagen}
                        className="card-img-top img-fluid rounded-top"
                        alt={hamburguesa.nombre}
                      />
                      <div className="card-body  text-black p-2 ">
                        <h5 className="card-title w-100">
                          {hamburguesa.nombre}
                        </h5>

                        <p className="card-text">{hamburguesa.descripcion}</p>
                        <p className="card-text">
                          Precio: ${hamburguesa.precioDolar.toFixed(2)} (USD) /
                          ${hamburguesa.precio.toFixed(2)} (ARS)
                        </p>
                        <button className="btn btn-secondary bg-light-50 subtext h-100 w-100 font ">
                          Agregar al Carrito
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-4 " ref={compraSectionRef} id="compra">
              <h3>Carrito de Compras</h3>
              {carrito.length === 0 ? (
                <div className="div d-flex justify-content-center ">
                  <p className=" p-1 subtext m-0 d-flex  justify-content-center align-items-center flex-column text-danger fs-2 bg-dark rounded sombra">
                    Tu carrito está vacío
                    <p className="fs-4 text-light">
                      Seleccione una hamburguesa
                    </p>
                    <img
                      src="./img-redux/carita.svg"
                      alt="Carita triste"
                      width="50"
                      height="50"
                    />
                  </p>
                </div>
              ) : (
                <ul className="list-group  ">
                  {carrito.map((item, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between bg-dark text-light"
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
                  <h4 className="">
                    Precio Total:{' '}
                    <span className=""> ${calcularPrecioTotal()} </span>
                  </h4>
                  <button className="btn btn-success" onClick={realizarPedido}>
                    Realizar Pedido por WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Agregamos la flecha que aparecerá cuando haya elementos en el carrito */}
      {showArrow && (
        <div className="arrow-wrapper" onClick={handleArrowClick}>
          <div className="arrow">&#8595;</div>
        </div>
      )}
    </>
  );
};

export default Hamburguesas;
