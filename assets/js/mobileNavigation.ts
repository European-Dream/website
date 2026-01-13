export interface MobileNavigationElements {
  menuToggle: HTMLButtonElement | null;
  mobileNav: HTMLElement | null;
  closeButton: HTMLButtonElement | null;
}

export const getElements = (): MobileNavigationElements => ({
  menuToggle: document.querySelector<HTMLButtonElement>(".header__menu-toggle"),
  mobileNav: document.querySelector<HTMLElement>(".navigation--mobile"),
  closeButton: document.querySelector<HTMLButtonElement>(".navigation__close"),
});

export const openMenu = (elements: MobileNavigationElements): void => {
  const { mobileNav, menuToggle, closeButton } = elements;

  if (!mobileNav || !menuToggle || !closeButton) {
    return;
  }

  mobileNav.classList.add("is-open");
  mobileNav.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  closeButton.focus();
};

export const closeMenu = (elements: MobileNavigationElements): void => {
  const { mobileNav, menuToggle } = elements;

  if (!mobileNav || !menuToggle) {
    return;
  }

  mobileNav.classList.remove("is-open");
  mobileNav.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.focus();
};

export const isMenuOpen = (mobileNav: HTMLElement | null): boolean => {
  if (!mobileNav) {
    return false;
  }
  return mobileNav.classList.contains("is-open");
};

export const handleKeyDown = (
  event: KeyboardEvent,
  elements: MobileNavigationElements
): void => {
  if (event.key === "Escape" && isMenuOpen(elements.mobileNav)) {
    closeMenu(elements);
  }
};

export const initMobileNavigation = (): void => {
  const elements = getElements();

  if (!elements.menuToggle || !elements.mobileNav || !elements.closeButton) {
    return;
  }

  elements.menuToggle.addEventListener("click", () => openMenu(elements));
  elements.closeButton.addEventListener("click", () => closeMenu(elements));
  document.addEventListener("keydown", (event) => handleKeyDown(event, elements));

  const navLinks = elements.mobileNav.querySelectorAll<HTMLAnchorElement>(".navigation__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu(elements));
  });
};
