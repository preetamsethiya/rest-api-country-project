import { useState } from "react";
import "../../CountryStyle.css";
import Country from "./Country";
import Search from "./Search";
import SelectMenu from "./SelectMenu";
import { useOutletContext } from "react-router";

export default function CountryList() {
  const [query, setQuery] = useState("");

  const [isDark] = useOutletContext();
  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="searchSelectContainer">
          <Search setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <Country query={query} />
      </main>
    </>
  );
}
