import { addCard, loanCard, cartList } from "../LocalStorage/";

export function addPrd(id, memory, color, quantity) {
  addCard(id, memory, color, quantity);
  loanCard();
  console.log(cartList);
}
