export const useFormatPrice = price => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  });

  return formatter.format(price);
};
