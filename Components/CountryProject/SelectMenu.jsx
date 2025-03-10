export default function SelectMenu({ setQuery }) {
  return (
    <>
      <select
        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        className="selectContainer"
      >
        <option value="" hidden>
          {" "}
          Filter by region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}
