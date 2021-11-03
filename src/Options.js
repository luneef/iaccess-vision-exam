import { useState, useEffect } from "react";
import Select from "react-select";

// Options Component
const Options = ({
  countries,
  languages,
  handleCountrySel,
  handleLanguageSel,
}) => {
  const [countriesData, setCountriesData] = useState([]);
  const [languageData, setLanguageData] = useState([]);

  // Changes the key property names configured for react-select
  const gatherCountries = () => {
    setCountriesData(
      countries.map((ctry) => {
        return { ...countriesData, value: ctry.code, label: ctry.name };
      })
    );
  };

  // Adds key property names configured for react-select
  const gatherLanguage = () => {
    setLanguageData(
      languages.map((lang) => {
        return { ...languageData, value: lang, label: lang };
      })
    );
  };

  useEffect(() => {
    gatherCountries();
    gatherLanguage();

    // eslint-disable-next-line
  }, []);

  return (
    <section className="form-section">
      <div>
        <label htmlFor="country">Country:</label>

        <Select
          className="select"
          options={countriesData}
          onChange={handleCountrySel}
          placeholder={"- Select -"}
        />
      </div>

      <div className="language-options">
        <label htmlFor="language">Language:</label>

        <Select
          className="select"
          options={languageData}
          onChange={handleLanguageSel}
          placeholder={"- Select -"}
        />
      </div>
    </section>
  );
};

export default Options;
