export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Account for fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

