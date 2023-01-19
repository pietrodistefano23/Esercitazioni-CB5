import { useEffect } from 'react';
import { useState } from 'react';
import './index.css'
const Filter = ({setFilterState}) => {
    const [inputFilter, setInputFilter] = useState("");
    const onHandleInput = (e) => {
       e.preventDefault();
       console.log(e.target.value)
       setInputFilter(e.target.value);
    };

    const onHandleSubmit =  (e) =>{
        e.preventDefault();
        setFilterState(inputFilter);
    };
    return (
        <div>
        <form className="Filter" 
        onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={inputFilter}
            onChange={onHandleInput}
            placeholder="Search..."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  };
    


export default Filter ;