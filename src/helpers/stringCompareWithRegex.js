function stringCompareRegex(productName, inputedString) {
  return(productName.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
        .includes(inputedString
          .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase()));
}

export default stringCompareRegex;