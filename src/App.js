import { useState } from "react";
import countries from "./data/country";
import languages from "./data/language";
import Options from "./Options";
import "./style/style.css";

//Main App Component
const App = () => {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  // Sets the display value for country selected
  const handleCountrySel = (countrysel) => {
    setCountry(countrysel.label);
  };

  // Sets the display value for language selected
  const handleLanguageSel = (languagesel) => {
    setLanguage(languagesel.label);
  };

  return (
    <main className="display-main">
      <div className="form-container">
        <h1>Display my selected value</h1>
        <p>
          Country: <span>{country ? country : "My selected country"}</span>
        </p>
        <p>
          Language: <span>{language ? language : "My selected language"}</span>
        </p>

        <Options
          countries={countries}
          languages={languages}
          handleCountrySel={handleCountrySel}
          handleLanguageSel={handleLanguageSel}
        />
      </div>
    </main>
  );
};

export default App;
