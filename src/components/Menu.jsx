import React, { useState } from 'react';

const hamburguesasData = [
  {
    nombre: 'Classic',
    precio: 1000,
    
    imagen: '/img/classic.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  {
    nombre: 'Argenta',
    precio: 1200,
    imagen: '/img/argen.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  {
    nombre: 'veggie',
    precio: 1000,
    imagen: '/img/veggie.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  {
    nombre: 'Chesee',
    precio: 700,
    imagen: '/img/cheese.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  {
    nombre: 'Top One',
    precio: 1200,
    imagen: '/img/topone.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  {
    nombre: 'Hulk',
    precio: 1700,
    imagen: '/img/hulk1.jpg' // Reemplaza con la ruta de tu imagen para esta hamburguesa
  },
  // Agrega más hamburguesas aquí
];

const Hamburguesas = () => {
  const [carrito, setCarrito] = useState([]);

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

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  const calcularPrecioTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const realizarPedido = () => {
    let mensaje = '¡Hola! Quiero realizar el siguiente pedido:\n\n';
    carrito.forEach((item) => {
      mensaje += `${item.nombre} - $${item.precio} - Cantidad: ${item.cantidad}\n`;
    });

    mensaje += `\nPrecio total: $${calcularPrecioTotal()}`;

    const numeroWhatsapp = '3755390616'; // Reemplaza con tu número de WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsapp);
  };

  return (<>
      <header className="bg-custom2 shadow p-3 " style={{ zIndex: 1 }} >
          <p className="m-0 "></p>
        </header>
<main className='bg-custom1'>
  <div className="container py-4 text-center ">
        <h1>Tienda de Hamburguesas</h1>
        <div className="row row-cols-2 row-cols-md-2 row-cols-lg-5 g-3">
          {hamburguesasData.map((hamburguesa, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img
                  src={hamburguesa.imagen}
                  className="card-img-top img-fluid" // Agrega la clase "img-fluid" para hacer la imagen responsiva
                  alt={hamburguesa.nombre}
                  />
                <div className="card-body">
                  <h5 className="card-title">{hamburguesa.nombre}</h5>
                  <p className="card-text">{hamburguesa.descripcion}</p>
                  <p className="card-text">Precio: ${hamburguesa.precio}</p>
                  <button
                    className="btn btn-secondary bg-light-50"
                    onClick={() => agregarAlCarrito(hamburguesa.nombre, hamburguesa.precio)}
                    >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3>Carrito de Compras</h3>
          {carrito.length === 0 ? (
            <p className='bg-danger border border-secondary '>Tu carrito está vacío</p>
            ) : (
              <ul className="list-group">
              {carrito.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between" key={index}>
                  <span>
                    {item.nombre} - ${item.precio} - Cantidad: {item.cantidad}
                  </span>
                  <button className="btn btn-danger" onClick={() => eliminarDelCarrito(index)}>
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
          </main>
          <footer className="bg-custom2 shadow p-3 " style={{ zIndex: 1 }} >
          <p className="m-0 "></p>
        </footer>

          </>
  );
};

export default Hamburguesas;
