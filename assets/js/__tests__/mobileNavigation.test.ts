import { describe, it, expect, beforeEach, mock } from "bun:test";
import {
  openMenu,
  closeMenu,
  isMenuOpen,
  handleKeyDown,
  type MobileNavigationElements,
} from "../mobileNavigation";

const createMockElements = (): MobileNavigationElements => ({
  menuToggle: {
    setAttribute: mock(),
    focus: mock(),
  } as unknown as HTMLButtonElement,
  mobileNav: {
    classList: {
      add: mock(),
      remove: mock(),
      contains: mock(),
    },
    setAttribute: mock(),
  } as unknown as HTMLElement,
  closeButton: {
    focus: mock(),
  } as unknown as HTMLButtonElement,
});

describe("openMenu", () => {
  let elements: MobileNavigationElements;

  beforeEach(() => {
    elements = createMockElements();
  });

  it("should add is-open class to mobile nav", () => {
    openMenu(elements);

    expect(elements.mobileNav?.classList.add).toHaveBeenCalledWith("is-open");
  });

  it("should set aria-hidden to false on mobile nav", () => {
    openMenu(elements);

    expect(elements.mobileNav?.setAttribute).toHaveBeenCalledWith(
      "aria-hidden",
      "false"
    );
  });

  it("should set aria-expanded to true on menu toggle", () => {
    openMenu(elements);

    expect(elements.menuToggle?.setAttribute).toHaveBeenCalledWith(
      "aria-expanded",
      "true"
    );
  });

  it("should focus the close button", () => {
    openMenu(elements);

    expect(elements.closeButton?.focus).toHaveBeenCalled();
  });

  it("should do nothing if elements are null", () => {
    const nullElements: MobileNavigationElements = {
      menuToggle: null,
      mobileNav: null,
      closeButton: null,
    };

    expect(() => openMenu(nullElements)).not.toThrow();
  });
});

describe("closeMenu", () => {
  let elements: MobileNavigationElements;

  beforeEach(() => {
    elements = createMockElements();
  });

  it("should remove is-open class from mobile nav", () => {
    closeMenu(elements);

    expect(elements.mobileNav?.classList.remove).toHaveBeenCalledWith("is-open");
  });

  it("should set aria-hidden to true on mobile nav", () => {
    closeMenu(elements);

    expect(elements.mobileNav?.setAttribute).toHaveBeenCalledWith(
      "aria-hidden",
      "true"
    );
  });

  it("should set aria-expanded to false on menu toggle", () => {
    closeMenu(elements);

    expect(elements.menuToggle?.setAttribute).toHaveBeenCalledWith(
      "aria-expanded",
      "false"
    );
  });

  it("should focus the menu toggle", () => {
    closeMenu(elements);

    expect(elements.menuToggle?.focus).toHaveBeenCalled();
  });

  it("should do nothing if elements are null", () => {
    const nullElements: MobileNavigationElements = {
      menuToggle: null,
      mobileNav: null,
      closeButton: null,
    };

    expect(() => closeMenu(nullElements)).not.toThrow();
  });
});

describe("isMenuOpen", () => {
  it("should return true when is-open class is present", () => {
    const containsMock = mock(() => true);
    const mobileNav = {
      classList: {
        contains: containsMock,
      },
    } as unknown as HTMLElement;

    const result = isMenuOpen(mobileNav);

    expect(result).toBe(true);
    expect(containsMock).toHaveBeenCalledWith("is-open");
  });

  it("should return false when is-open class is absent", () => {
    const mobileNav = {
      classList: {
        contains: mock(() => false),
      },
    } as unknown as HTMLElement;

    const result = isMenuOpen(mobileNav);

    expect(result).toBe(false);
  });

  it("should return false when mobileNav is null", () => {
    const result = isMenuOpen(null);

    expect(result).toBe(false);
  });
});

describe("handleKeyDown", () => {
  const createElementsWithMenuOpen = (isOpen: boolean): MobileNavigationElements => ({
    menuToggle: {
      setAttribute: mock(),
      focus: mock(),
    } as unknown as HTMLButtonElement,
    mobileNav: {
      classList: {
        add: mock(),
        remove: mock(),
        contains: mock(() => isOpen),
      },
      setAttribute: mock(),
    } as unknown as HTMLElement,
    closeButton: {
      focus: mock(),
    } as unknown as HTMLButtonElement,
  });

  it("should close menu when Escape is pressed and menu is open", () => {
    const elements = createElementsWithMenuOpen(true);
    const event = { key: "Escape" } as KeyboardEvent;

    handleKeyDown(event, elements);

    expect(elements.mobileNav?.classList.remove).toHaveBeenCalledWith("is-open");
  });

  it("should not close menu when other key is pressed", () => {
    const elements = createElementsWithMenuOpen(true);
    const event = { key: "Enter" } as KeyboardEvent;

    handleKeyDown(event, elements);

    expect(elements.mobileNav?.classList.remove).not.toHaveBeenCalled();
  });

  it("should not close menu when Escape is pressed but menu is closed", () => {
    const elements = createElementsWithMenuOpen(false);
    const event = { key: "Escape" } as KeyboardEvent;

    handleKeyDown(event, elements);

    expect(elements.mobileNav?.classList.remove).not.toHaveBeenCalled();
  });
});
