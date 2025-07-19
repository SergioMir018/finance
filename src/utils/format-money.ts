export function formatMoney(amount: number): string {
  return amount.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
      maximumFractionDigits: 0,
  });
}