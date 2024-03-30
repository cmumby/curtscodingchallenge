// eslint-disable-next-line import/prefer-default-export
export function formatNumber(num) {
  if (num >= 1000 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  if (num >= 1000000 && num < 1000000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  }
  return num.toString();
}
