export let cartList;
export function loanCard() {
  cartList = JSON.parse(localStorage.getItem(process.env.REACT_APP_CART)) || [];
  console.log(typeof cartList);
  return cartList;
}
loanCard();
export function addCard(id, memory, color, quantity) {
  cartList.some((item) => {
    if (item.id == id && item.color == color) {
      item.quantity += 1;
      return true;
    }
  })
    ? null
    : cartList.push({
        id: id,
        memory: memory,
        color: color,
        quantity: quantity || 1,
      });

  localStorage.setItem(process.env.REACT_APP_CART, JSON.stringify(cartList));
}
