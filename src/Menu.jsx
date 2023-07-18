import { useState } from 'react';

const Hamburguesas = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (nombre, precio) => {
    const elementoExistente = carrito.find((item) => item.nombre === nombre);
    if (elementoExistente) {
      const nuevoCarrito = carrito.map((item) => {
        if (item.nombre === nombre) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
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
    let total = 0;
    carrito.forEach((item) => {
      total += item.precio * item.cantidad;
    });
    return total;
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

  return (
    <div className="container vh-100 bg-cont text-center d-flex flex-wrap justify-content-center align-items-center">
      <h1>Tienda de Hamburguesas</h1>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <img
              src="src/img/3.jpg"
              className="card-img-top"
              alt="Hamburguesa 1"
            />
            <div className="card-body">
              <h5 className="card-title">Hamburguesa Clásica</h5>
              <p className="card-text">
                Deliciosa hamburguesa con carne, queso, lechuga y tomate.
              </p>
              <p className="card-text">Precio: $10</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito('Hamburguesa Clásica', 10)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <img
              src="src/img/3.jpg"
              className="card-img-top"
              alt="Hamburguesa 2"
            />
            <div className="card-body">
              <h5 className="card-title">Hamburguesa BBQ</h5>
              <p className="card-text">
                Deliciosa hamburguesa con carne, queso, tocino y salsa BBQ.
              </p>
              <p className="card-text">Precio: $12</p>
              <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito('Hamburguesa BBQ', 12)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
        {/* Agrega más tarjetas de hamburguesas aquí */}
      </div>
      <div>
        <hr />

        <h3>Carrito de Compras</h3>
        <ul className="list-group">
          {carrito.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={index}
            >
              <span>
                {item.nombre} - ${item.precio} - Cantidad: {item.cantidad}
              </span>
              <button
                className="btn btn-danger"
                onClick={() => eliminarDelCarrito(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        {carrito.length > 0 && (
          <div>
            <hr />
            <h4>Precio Total: ${calcularPrecioTotal()}</h4>
            <button className="btn btn-success" onClick={realizarPedido}>
              Realizar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburguesas;
