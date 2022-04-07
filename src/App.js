import './App.css';
import { useState } from 'react';
// import axios from '../node_modules/axios/index';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      await axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e93152cbbb9e4d3ebdc13c7b42a34508',
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>Load</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
