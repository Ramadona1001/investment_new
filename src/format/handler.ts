export const handlerRemoveTag = (content: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const cleanText = doc.body.textContent || doc.body.innerText;

  return cleanText;
};
