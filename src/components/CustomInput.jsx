// eslint-disable-next-line react/prop-types
const CustomInput = ({type,placeholder,i_id,i_class}) => {
   
  return (

<div className="form-floating mb-3">
    <input type={type}
    className={`form-control ${i_class}`}
    id={i_id}    
    placeholder={placeholder}   
    // placeholder="enter your name"
      />
<label htmlFor={placeholder}>{placeholder}</label>
</div>
)
}

export default CustomInput