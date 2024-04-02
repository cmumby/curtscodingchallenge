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

export function formatDate(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diff = now - date;

  // If the difference is less than 1 second, show "Just Now"
  if (diff < 1000) {
    return 'Just Now';
  }
  // If the difference is less than 1 minute, show the seconds
  if (diff < 60000) {
    return `${Math.floor(diff / 1000)}s`;
  }
  // If the difference is less than 1 hour, show the minutes
  if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}m`;
  }
  // If the date is in the current year, show "Apr 2" format
  if (now.getFullYear() === date.getFullYear()) {
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  }
  // Otherwise, show "Dec 29 2023" format

  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleString('en-US', options);
}
