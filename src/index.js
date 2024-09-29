import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";

const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage;
  return language.startsWith("es") ? "es" : "en";
};

const locale = getBrowserLanguage();
const messages = locale === "es" ? localeEsMessages : localeEnMessages;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList locale={locale} />
  </IntlProvider>,
  document.getElementById("root")
);
