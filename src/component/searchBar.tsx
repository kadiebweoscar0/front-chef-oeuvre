// import InputField from "./inputField";

type SearchBarProps = {

  onChange?: any;
  className: string;
};

 const SearchBar: React.FunctionComponent<SearchBarProps>= ({className, onChange})=>(  
    <>
      {/* <InputField type={"text"} onChange={onChange} className={className} placeholder=" Rechercher "/> */}
      <input
      className={className}
        type="text"
        placeholder=" Rechercher "
        onChange={onChange}
    />
    </>

  
 )

export default SearchBar

 /* <input
        type="text"
        placeholder="Rechercher par nom"
        onChange={(event) => setSearchTerm(event.target.value)}
    /> */