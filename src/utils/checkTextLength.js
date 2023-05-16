export function checkTextLength(text) {
  if (text.length > 20) {
    text = text.substring(0, 20) + "...";
    return text;
  }

  return text;
}
