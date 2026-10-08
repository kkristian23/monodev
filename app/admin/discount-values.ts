export function parseDiscountNumber(value: unknown): number {
  if (value === null || value === undefined || String(value).trim() === "") return NaN;
  return Number(String(value).trim().replace(",", "."));
}
export function discountedPrice(standard: number, percent: number): number {
  return Math.round((standard * (100 - percent) / 100 + Number.EPSILON) * 100) / 100;
}
