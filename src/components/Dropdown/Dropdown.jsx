
import "./dropdown.css";
import Select from 'react-select'


export function DropdownOptions(props) {

  const options = props.data.data.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  const handleClickDropdown = (selectedOption) => {
    props.tohandle(props.data.title, selectedOption.value)
  };
  
  return (
    <div className="dropdownContainer">
      <h1 className="titleDropdown">{props.data.title}:</h1>
      <Select options={options} styles={{
        control: (provided) => ({ ...provided, borderRadius: '50px'})
        }} 
        placeholder='Seleccionar' 
        className="selectContainer"
        onChange={handleClickDropdown}
        isDisabled={props.disabled}
      />
    </div>
  );
}
