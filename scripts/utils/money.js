//money converted to 2 decimal digit
export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}