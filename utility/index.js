export const formatCurrency = (price) => {
  if (!price) {
    price = 0;
  }
  const formatter = price.toLocaleString("en-US");
  const formattedPrice = `Rp ${formatter},-`;
  return formattedPrice;
};
