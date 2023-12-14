export default function getBackgroundIconByName(name: string): string {
  switch (name) {
    case "HTML":
      return "#FFF1E9";
    case "CSS":
      return "#E0FDEF";
    case "JavaScript":
      return "#EBF0FF";
    case "Accessibility":
      return "#F6E7FF";
    default:
      return "#FFF1E9";
  }
}
