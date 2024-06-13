import swearWords from './swearWords';

// eslint-disable-next-line import/prefer-default-export
export function censorSwearWords(text) {
  const regex = new RegExp(swearWords.join('|'), 'gi');

  return text.replace(regex, match => {
    const firstLetter = match.charAt(0);
    const lastLetter = match.charAt(match.length - 1);
    const middle = '#'.repeat(match.length - 2);
    return `${firstLetter}${middle}${lastLetter}`;
  });
}
