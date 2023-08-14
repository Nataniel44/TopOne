import { useState, useRef, useEffect } from 'react';

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
  const [showArrow, setShowArrow] = useState(false);
  const [filtro, setFiltro] = useState('');
  const [orden, setOrden] = useState('mayor'); // Estado para controlar el orden de la lista

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
        
      <main className=" container " id='menu'>
        <div className= "text-center  " >
          <div className=' bg-cont border-2 fondo border-dark border mb-3 mt-3 rounded text-light p-2'>
            <h1 className=" display-3 m-1 text ">Menú</h1>
            <div className="row  ms-3 me-3 mb-1">

            <div className=" col-7 d-flex align-items-center justify-content-start ">
              <input
                type="text"
                className="form-control border-dark w-75"
                placeholder="Buscar hamburguesa..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
                />
                </div>
              <div className='col-5 d-flex align-items-center justify-content-end text'>
              <div className="w-100  ">
                <div
                  className={` arrow-radio ${orden === 'mayor' ? 'selected' : ''}`}
                  onClick={() => setOrden('mayor')}
                  id=''
                >
                  &uarr; <span className='s'>Mayor precio</span> 
                </div>
                <div
                  className={`ms-3 arrow-radio ${orden === 'menor' ? 'selected' : ''}`}
                  onClick={() => setOrden('menor')}
                >
                  &darr; <span className='s'>Menor precio</span> 
                </div>
              </div>
              </div>
            </div>
            </div>
         
            
          <div className="fondo p-3 border border-1 border-secondary shadow p-3 mb-5 bg-body rounded ">
           

          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 ">
        {hamburguesasData.filter(filtrarHamburguesas).sort(ordenarHamburguesas).map((hamburguesa, index) => (
                <div
                className="col"
                  key={index}
                  onClick={() =>
                    agregarAlCarrito(hamburguesa.nombre, hamburguesa.precio)
                  }
                >
                  <div className="card bg-warning  ">
                    <img
                      src={hamburguesa.imagen}
                      className="card-img-top img-fluid "
                      alt={hamburguesa.nombre}
                    />
                    <div className="card-body  text-black p-2 ">
                      <h5 className="card-title w-100">{hamburguesa.nombre}</h5>
                      <p className="card-text">{hamburguesa.descripcion}</p>
                      <p className="card-text">Precio: ${hamburguesa.precio}</p>
                      <button className="btn btn-secondary bg-light-50 subtext h-100 w-100 font ">
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
                  <h4 className=''>Precio Total: <span className=''> ${calcularPrecioTotal()} </span></h4>
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

    </>
  );
};

export default Hamburguesas;