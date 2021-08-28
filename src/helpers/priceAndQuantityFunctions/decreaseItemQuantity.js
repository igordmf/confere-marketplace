function decreaseItemQuantity(itemsArray, itemAdded) {
  const newItemsArray = itemsArray.map((item) => {
    if(item.name === itemAdded.name && item.chosenSize === itemAdded.chosenSize) {
      return { ...item, quantity: item.quantity - 1};
    }
    return item;
  })
  return newItemsArray;
}

export default decreaseItemQuantity;