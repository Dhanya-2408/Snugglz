export const makeCapitalizeText = (text: string) =>
  (text && text[0].toUpperCase() + text.slice(1)) || "";

export const makeShortText = (text: string) => {
  if (text.length > 50) {
    return text.substring(0, 50) + "...";
  }
  return text;
};

export function isString(x: any) {
  return Object.prototype.toString.call(x) === "[object String]";
}

export const encodeUrl = (name: string) =>
  name?.replace(/&/g, "and").replace(/\s+/g, "-");

export const decodeUrl = (name: string) =>
  name?.replace(/and/g, "&").replace(/-/g, " ");
