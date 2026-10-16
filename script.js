// Small interactions for Saulat's portfolio.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

// Open and close the mobile navigation when its button is pressed.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  // Close the menu after a navigation link is selected.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    });
  });
}

// Keep the copyright year current automatically.
const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
