const apiCart = {};

const URL = `https://bookstore-api.gyfted.dev/api/cart/`;

// iniciliza el carrito y trae los datos del usuario actual (segun el token)
apiCart.getCart = async (token) => {
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

// Agrega un libro al carrito de compra (si esta inicializado)
apiCart.addBookToCart = async (book, token) => {
  if (book.subtitle === '') {
    delete book.subtitle;
  }
  const response = await fetch(URL + 'book', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(book),
  });
  return await response.json();
};

// Elimina un libro del carrito de compra
apiCart.deleteBookFromCart = async (isbn, token) => {
  const response = await fetch(`${URL}book/${isbn}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

// cierra el carritos de compra
apiCart.closeCart = async (token) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export default apiCart;
