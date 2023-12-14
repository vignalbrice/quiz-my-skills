
const width = window.innerWidth;
const isMobile = width <= 768;
const isTablet = width > 768 && width <= 1024;
const isDesktop = width > 1024;


export const device = {
  isMobile,
  isTablet,
  isDesktop
}