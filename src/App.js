import CatListItem from './components/CatListItem';
import React, { useEffect, useState } from "react";
import API from './utils/API';

function App() {
  const [cats, setCats] = useState([])
  const [newCat, setNewCat] = useState("")
  useEffect(() => {
   loadCats()
  }, [])

  const loadCats = ()=>{
    API.getAllCats().then(res => {
      setCats(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const formSubmit = event=>{
    event.preventDefault();
    API.createCat(newCat).then(res=>{
      setNewCat("")
     loadCats()
    }).catch(err=>{
      console.log(err)
    })
  }

  const catDelClickHandler = id=>{
    API.deleteCat(id).then(res=>{
      loadCats();
    })
  }
  return (

    <div className="App">
      <h2>new cat:</h2>
      <form onSubmit={formSubmit}>
        <input value={newCat} onChange={(event) => setNewCat(event.target.value)} />
        <button>Add Cat!</button>
      </form>
      <h2>A sampling of some great cats</h2>
      <ul>
        {cats.map(cat => <CatListItem key={cat.id} name={cat.name} id={cat.id}  catDelClickHandler={catDelClickHandler}/>)}
      </ul>
    </div>
  );
}

export default App;
