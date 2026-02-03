import "@hotwired/turbo";
import { initMobileNavigation } from "./mobileNavigation";

document.addEventListener("turbo:load", initMobileNavigation);
