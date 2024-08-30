import i18next from "i18next";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import { initReactI18next } from "react-i18next";
import localizations from "./assets/localizations.json";

i18next.use(initReactI18next).init({
  resources: localizations,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  return (
    <main>
      <Navigation />
      <LandingPage />
    </main>
  );
}

export default App;
