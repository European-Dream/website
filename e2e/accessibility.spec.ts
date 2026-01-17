import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const PAGES = [
  { path: "/", name: "Homepage" },
  { path: "/why/", name: "Why page" },
  { path: "/goals/", name: "Goals page" },
  { path: "/roadmap/", name: "Roadmap page" },
  { path: "/contact/", name: "Contact page" },
  { path: "/identity/", name: "Identity page" },
  { path: "/website-elements/", name: "Website Elements page" },
];

test.describe("Accessibility tests", () => {
  for (const page of PAGES) {
    test(`${page.name} should have no accessibility violations`, async ({
      page: browserPage,
    }) => {
      await browserPage.goto(page.path);

      const accessibilityScanResults = await new AxeBuilder({ page: browserPage })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .exclude("iframe")
        .analyze();

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

test.describe("Keyboard navigation", () => {
  test.skip(({ isMobile }) => isMobile, "Keyboard navigation not applicable on mobile");

  test("should be able to navigate main menu with keyboard", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");

    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeFocused();

    await page.keyboard.press("Tab");

    const logoLink = page.locator(".header__logo-link");
    await expect(logoLink).toBeFocused();

    await page.keyboard.press("Tab");

    const firstNavLink = page.locator(".header__navigation .navigation__link").first();
    await expect(firstNavLink).toBeFocused();
  });

  test("skip link should navigate to main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    const main = page.locator("#main");
    await expect(main).toBeFocused();
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should open and close mobile menu", async ({ page }) => {
    await page.goto("/");

    const menuToggle = page.locator(".header__menu-toggle");
    const mobileNav = page.locator(".navigation--mobile");

    await expect(mobileNav).toHaveAttribute("aria-hidden", "true");

    await menuToggle.click();

    await expect(mobileNav).toHaveClass(/is-open/);
    await expect(mobileNav).toHaveAttribute("aria-hidden", "false");
    await expect(menuToggle).toHaveAttribute("aria-expanded", "true");

    const closeButton = page.locator(".navigation__close");
    await closeButton.click();

    await expect(mobileNav).not.toHaveClass(/is-open/);
    await expect(mobileNav).toHaveAttribute("aria-hidden", "true");
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
  });

  test("should close mobile menu with Escape key", async ({ page }) => {
    await page.goto("/");

    const menuToggle = page.locator(".header__menu-toggle");
    const mobileNav = page.locator(".navigation--mobile");

    await menuToggle.click();
    await expect(mobileNav).toHaveClass(/is-open/);

    await page.keyboard.press("Escape");

    await expect(mobileNav).not.toHaveClass(/is-open/);
  });
});

test.describe("Semantic structure", () => {
  test("page should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    const headings = await page.evaluate(() => {
      const levels: number[] = [];
      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((h) => {
        const level = parseInt(h.tagName.substring(1));
        levels.push(level);
      });
      return levels;
    });

    for (let i = 1; i < headings.length; i++) {
      const diff = headings[i] - headings[i - 1];
      expect(diff).toBeLessThanOrEqual(1);
    }
  });

  test("page should have proper landmark regions", async ({ page, isMobile }) => {
    await page.goto("/");

    await expect(page.locator("header[role='banner']")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("#main")).toBeAttached();
    await expect(page.locator("footer[role='contentinfo']")).toBeVisible();

    if (isMobile) {
      await expect(page.locator("nav.navigation--mobile")).toBeAttached();
    } else {
      await expect(page.locator("nav[role='navigation']").first()).toBeVisible();
    }
  });

  test("images should have alt text", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });
});
