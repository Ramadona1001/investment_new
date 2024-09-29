export function countCharacters(text: string) {
  const characterCount = text.length;

  if (characterCount > 200) {
    return text.slice(0, 200) + "...";
  } else {
    return text;
  }
}
export function formatTextDoctor(text: string) {
  const characterCount = text.length;

  if (characterCount > 50) {
    return text.slice(0, 50) + "...";
  } else {
    return text;
  }
}
export function formatText(text: string) {
  const characterCount = text.length;

  if (characterCount > 200) {
    return text.slice(0, 5) + "...";
  } else {
    return text;
  }
}
export function formatTextTitle(text: string) {
  const characterCount = text?.length;

  if (characterCount > 20) {
    return text.slice(0, 20) + "...";
  } else {
    return text;
  }
}