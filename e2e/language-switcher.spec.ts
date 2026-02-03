import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Language switcher", () => {
  test.describe("Desktop", () => {
    test.skip(({ isMobile }) => isMobile, "Desktop tests not applicable on mobile");

    test("should display language switcher button in header", async ({ page }) => {
      await page.goto("/");

      const languageSwitcher = page.locator(".header__language-switcher");
      await expect(languageSwitcher).toBeVisible();
      await expect(languageSwitcher).toHaveAttribute("aria-label", "Select language");
    });

    test("should navigate to languages page when clicking language switcher", async ({
      page,
    }) => {
      await page.goto("/");

      const languageSwitcher = page.locator(".header__language-switcher");
      await languageSwitcher.click();

      await expect(page).toHaveURL("/languages/");
    });

    test("should be keyboard accessible", async ({ page }) => {
      await page.goto("/");

      const navLinks = page.locator(".header__navigation .navigation__link");
      const navCount = await navLinks.count();

      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");

      for (let i = 0; i < navCount; i++) {
        await page.keyboard.press("Tab");
      }

      await page.keyboard.press("Tab");

      const languageSwitcher = page.locator(".header__language-switcher");
      await expect(languageSwitcher).toBeFocused();
    });
  });

  test.describe("Mobile", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("should hide language switcher button in header on mobile", async ({ page }) => {
      await page.goto("/");

      const languageSwitcher = page.locator(".header__language-switcher");
      await expect(languageSwitcher).toBeHidden();
    });

    test("should display language switcher link in mobile menu", async ({ page }) => {
      await page.goto("/");

      const menuToggle = page.locator(".header__menu-toggle");
      await menuToggle.click();

      const mobileLanguageLink = page.locator(".navigation--mobile__language-link");
      await expect(mobileLanguageLink).toBeVisible();
      await expect(mobileLanguageLink).toHaveText(/Select language/);
    });

    test("should navigate to languages page from mobile menu", async ({ page }) => {
      await page.goto("/");

      const menuToggle = page.locator(".header__menu-toggle");
      await menuToggle.click();

      const mobileLanguageLink = page.locator(".navigation--mobile__language-link");
      await mobileLanguageLink.click();

      await expect(page).toHaveURL("/languages/");
    });

    test("hamburger icon should be right-aligned", async ({ page }) => {
      await page.goto("/");

      const header = page.locator(".header__inner");
      const menuToggle = page.locator(".header__menu-toggle");

      const headerBox = await header.boundingBox();
      const menuToggleBox = await menuToggle.boundingBox();

      expect(headerBox).not.toBeNull();
      expect(menuToggleBox).not.toBeNull();

      if (headerBox && menuToggleBox) {
        const headerRightEdge = headerBox.x + headerBox.width;
        const menuToggleRightEdge = menuToggleBox.x + menuToggleBox.width;
        const distanceFromRight = headerRightEdge - menuToggleRightEdge;

        expect(distanceFromRight).toBeLessThan(32);
      }
    });
  });
});

test.describe("Languages page", () => {
  test("should have no accessibility violations", async ({ page }) => {
    await page.goto("/languages/");

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should display page title", async ({ page }) => {
    await page.goto("/languages/");

    const title = page.locator("h1");
    await expect(title).toBeVisible();
    await expect(title).toHaveText("Select your language");
  });

  test("should display all 24 EU official languages", async ({ page }) => {
    await page.goto("/languages/");

    const languageItems = page.locator(".languages-list__item");
    await expect(languageItems).toHaveCount(24);
  });

  test("should have English and French as active languages", async ({ page }) => {
    await page.goto("/languages/");

    const englishLink = page.locator(".languages-list__link", {
      hasText: "English",
    });
    const frenchLink = page.locator(".languages-list__link", {
      hasText: "Français",
    });

    await expect(englishLink).not.toHaveClass(/languages-list__link--disabled/);
    await expect(frenchLink).not.toHaveClass(/languages-list__link--disabled/);
  });

  test("should have disabled styling for unavailable languages", async ({ page }) => {
    await page.goto("/languages/");

    const germanLink = page.locator(".languages-list__link", {
      hasText: "Deutsch",
    });

    await expect(germanLink).toHaveClass(/languages-list__link--disabled/);
  });

  test("should display translator recruitment message for unavailable languages", async ({
    page,
  }) => {
    await page.goto("/languages/");

    const germanItem = page.locator(".languages-list__item", {
      hasText: "Deutsch",
    });
    const helpMessage = germanItem.locator(".languages-list__help");

    await expect(helpMessage).toBeVisible();
    await expect(helpMessage).toContainText("Hallo!");
    await expect(helpMessage).toContainText(
      "We are looking for volunteers to help translate our content into German."
    );
  });

  test("should mark current language as current", async ({ page }) => {
    await page.goto("/languages/");

    const englishLink = page.locator(".languages-list__link--current", {
      hasText: "English",
    });

    await expect(englishLink).toBeVisible();
    await expect(englishLink).toHaveAttribute("aria-current", "true");
  });

  test("should navigate to French version when clicking French", async ({ page }) => {
    await page.goto("/languages/");

    const frenchLink = page.locator("a.languages-list__link", {
      hasText: "Français",
    });
    await frenchLink.click();

    await expect(page).toHaveURL("/fr/");
  });

  test("French languages page should have correct translations", async ({ page }) => {
    await page.goto("/fr/languages/");

    const title = page.locator("h1");
    await expect(title).toHaveText("Choisissez votre langue");

    const frenchLink = page.locator(".languages-list__link--current", {
      hasText: "Français",
    });
    await expect(frenchLink).toBeVisible();
  });

  test("should have proper semantic structure", async ({ page }) => {
    await page.goto("/languages/");

    const list = page.locator(".languages-list");
    await expect(list).toHaveAttribute("role", "list");

    const main = page.locator("#main");
    await expect(main).toBeVisible();
  });
});
