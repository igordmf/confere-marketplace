function increaseItemQuantity(itemsArray, itemAdded) {
  const newItemsArray = itemsArray.map((item) => {
    if(item.name === itemAdded.name && item.chosedSize === itemAdded.chosedSize) {
      return { ...item, quantity: item.quantity + 1};
    }
    return item;
  })
  return newItemsArray;
}

export default increaseItemQuantity;