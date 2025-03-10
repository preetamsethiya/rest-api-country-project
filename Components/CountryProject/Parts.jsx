// input component

// className
// label
// input_Id
// Type
// Name
// value
// placeholder
// search_Function
// input_Function
// times_Function
// search
// times
// default_search

const Input = ({
  className,
  label,
  input_Id,
  Type,
  Name,
  value,
  placeholder,
  search_Function,
  input_Function,
  times_Function,
  search,
  times,
  default_search,
}) => {
  return (
    <>
      <div className={`input_Component_Container ${className}`}>
        <label htmlFor={input_Id}>{label}</label>
        <div className="input_Container">
          {search ? (
            search
          ) : !default_search ? (
            ""
          ) : (
            <div onClick={search_Function} className="itags">
              &times;
            </div>
          )}
          <input
            id={input_Id}
            name={Name}
            type={Type}
            value={value}
            placeholder={placeholder || "Type here...!"}
            onChange={input_Function}
            className={` ${search ? "" : "component_Input_Padding"} `}
          />
          {times ? (
            times
          ) : (
            <div onClick={times_Function} className="itags">
              &times;
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// button component

const Button = ({ btn_Id, Name, className, text, btn_Function }) => {
  return (
    <>
      <button
        id={btn_Id}
        name={Name}
        className={className}
        onClick={btn_Function}
      >
        {" "}
        {text}
      </button>
    </>
  );
};

// card component

const Card2 = ({ className, children }) => {
  console.log(children);
  return (
    <>
      <div className={`card2 ${className}`}>{children}</div>
    </>
  );
};

export { Input, Button, Card2 };
