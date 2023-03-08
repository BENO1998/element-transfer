import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [bucket1, setBucket1] = useState(["1", "2", "3", "4"]);
  const [bucket2, setBucket2] = useState(["5", "6", "7", "8"]);

  const handleAdd = (e, elements, setter) => {
    e.preventDefault();
    setter([...elements, e.target.value]);
    setBucket1(bucket1.filter(el => el !== e.target.value));
  };

  const handleAdd2 = (e, elements, setter1) => {
    e.preventDefault();
    setter1([...elements, e.target.value]);
    setBucket2(bucket2.filter(el => el !== e.target.value));
  };

  const handleRemove = (e, elements, setter) => {
    e.preventDefault();
    const updatedElements = elements.filter(element => element !== e.target.value);
    setter(updatedElements);
    if(elements === bucket1) {
      setBucket2(bucket2.filter(el => el !== e.target.value));
    }else{
      setBucket1(bucket1.filter(el => el !== e.target.value));
    }
};

  const handleAddAll = (e, elements1, setter1, elements2, setter2) => {
    e.preventDefault();
    setter1([]);
    setter2([...elements2, ...elements1]);
  };

  const handleRemoveAll = (e, elements1, setter) => {
    e.preventDefault();
    setter([]);
  };

  const handleRemoveAll2 = (e, elements1, setter) => {
    e.preventDefault();
    setter([]);
  };

  return (
    <div className="container">
      <div>
        <h2>BUCKET - 1</h2>
        <ul>
          {bucket1.map((element, index) => (
            <li key={index}>
              <span className="bucket">{element}</span>
              <button onClick={e => handleRemove(e, bucket1, setBucket1)} value={element}>Remove</button>
              <button onClick={e => handleAdd(e, bucket2, setBucket2)} value={element}>Add to Bucket2</button>
            </li>
          ))}
        </ul>
        <button onClick={e => handleRemoveAll(e, bucket1, setBucket1)}>Remove All</button>
        <button onClick={e => handleAddAll(e, bucket1, setBucket1, bucket2, setBucket2)}>Add All to Bucket2</button>
      </div>
      <div>
        <h2>BUCKET - 2</h2>
        <ul>
          {bucket2.map((element, index) => (
            <li key={index}>
              <span className="bucket">{element}</span>
              <div className='addbutton'>
                <button onClick={e => handleRemove(e, bucket2, setBucket2)} value={element}>Remove</button>
                <button onClick={e =>  handleAdd2(e, bucket1, setBucket1)} value={element}>Add to Bucket1</button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={e => handleRemoveAll2(e, bucket2, setBucket2)}>Remove All</button>
        <button onClick={e => handleAddAll(e, bucket2, setBucket2, bucket1, setBucket1)}>Add All to Bucket1</button>
      </div>
    </div>
  );
};

export default App;