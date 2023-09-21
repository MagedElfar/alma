'use strict';
// The locale my app first shows
const defaultLocale = "en";
const supportedLocales = [
  { lang: "en", isRtl: false },
  { lang: "ar", isRtl: true },
];

// The active locale
let locale;
// Gets filled with active locale translations
let translations = {};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.querySelector('html');
  const langAttributeValue = htmlElement.getAttribute('lang');

  // const initialLocale = supportedOrDefault(browserLocales(true));
  const initialLocale = langAttributeValue;
  // Translate the page to the default locale
  setLocale(initialLocale);
  bindLocaleSwitcher(initialLocale);
});

// Load translations for the given locale and translate the page to this locale
async function setLocale(newLocale) {
  if (newLocale === locale) return;
  const newTranslations =
    await fetchTranslationsFor(newLocale);
  locale = newLocale;
  translations = newTranslations;

  // Set <html dir> attribute
  document.documentElement.dir = dir(newLocale);
  // Not necessary for direction flow, but for good measure...
  document.documentElement.lang = newLocale;

  const head = document.getElementsByTagName("head")[0];
  const title = document.getElementById("title");

  if (supportedLocales.find(lang => lang.lang === newLocale)?.isRtl) {
    const linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.classList.add("rtlCssFile");
    linkTag.id = "rtlCssFile";
    linkTag.href = "./css/rtl.css";
    title.after(linkTag);

    const rtlBsLinkTag = document.createElement("link");
    rtlBsLinkTag.rel = "stylesheet";
    rtlBsLinkTag.classList.add("rtlCssFile");
    rtlBsLinkTag.id = "rtlBsCssFile";
    rtlBsLinkTag.href = "./css/bootstrap.rtl.min.css";
    const bsCssFile = document.getElementById('bsCssFile');
    head.removeChild(bsCssFile);
    title.after(rtlBsLinkTag);
    // document.head.append('<link id="rtlCssFile" rel="stylesheet" href="./css/rtl.css" />');
  } else {
    // const rtlCssFile = document.querySelectorAll('.rtlCssFile');
    // if (rtlCssFile.length > 0) rtlCssFile.forEach((link) => head.removeChild(link));
    const rtlCssFile = document.querySelectorAll('.rtlCssFile');
    console.log(rtlCssFile);
    if (rtlCssFile.length > 0) rtlCssFile.forEach((link) => {
      if (link.id === 'rtlBsCssFile') {
        const bsLinkTag = document.createElement("link");
        bsLinkTag.rel = "stylesheet";
        bsLinkTag.href = "./css/bootstrap.min.css";
        bsLinkTag.id = "bsCssFile";
        head.replaceChild(bsLinkTag, link);
      } else head.removeChild(link);
    });
  }

  translatePage();
}

function dir(locale) {
  return supportedLocales.find(lang => lang.lang === locale).isRtl ? "rtl" : "ltr";
}

// Retrieve translations JSON object for the given locale over the network
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/locales/${newLocale}.json`);
  return await response.json();
}

// Replace the inner text of each element that has a data-i18n-key attribute with the translation corresponding to its data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}

// Replace the inner text of the given HTML element with the translation in the active locale, corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  // if (translation) element.innerText = translation;
  if (translation) element.innerHTML = translation;
}

// Replace the inner text of the given HTML element with the translation in the active locale, corresponding to the element's data-i18n-key
function translateElementManual(element, key) {
  // const key = element.getAttribute("data-i18n-key");
  const translation = translations[key];
  // if (translation) element.innerText = translation;
  console.log(translation);
  if (translation) element.innerHTML = translation;
}

// Whenever the user selects a new locale, we load the locale's translations and update the page
function bindLocaleSwitcher(initialValue) {
  const switcher =
    document.querySelector("[data-i18n-switcher]");
  switcher.value = initialValue;
  switcher.onchange = (e) => {
    // Set the locale to the selected option[value]
    setLocale(e.target.value);
  };
}

function isSupported(locale) {
  return supportedLocales.findIndex(lang => lang.lang === locale) > -1;
}

// Retrieve the first locale we support from the given array, or return our default locale

function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

/**
 * Retrieve user-preferred locales from the browser
 *
 * @param {boolean} languageCodeOnly - when true, returns
 * ["en", "fr"] instead of ["en-US", "fr-FR"]
 * @returns array | undefined
 */
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale,
  );
}

// ? End Localization ...
