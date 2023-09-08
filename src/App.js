import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [operationCode, setOperationCode] = useState(null);

  useEffect(() => {
    // GET request to fetch operation code
    axios.get('https://testbfhl.herokuapp.com/bfhl')
      .then((response) => {
        setOperationCode(response.data.operation_code);
      })
      .catch((error) => {
        console.error('Error fetching operation code:', error);
      });
  }, []);

  const postData = () => {
    // Sample data to post to the backend
    const data = ["M", "1", "334", "4", "B"];

    // POST request to send data to the backend
    axios.post('https://testbfhl.herokuapp.com/bfhl')
      .then((response) => {
        console.log('Response from the backend:', response.data);
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="App">
      <h1>Operation Code: {operationCode}</h1>
      <button onClick={postData}>Post Data</button>
    </div>
  );
}

export default App;
