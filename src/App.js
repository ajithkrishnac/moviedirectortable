import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [dir, setDir] = useState('');
  const [movie, setMovie] = useState('');

  const handleAdd = () => {
    if (dir.trim() !== '' && movie.trim() !== '') {
      setData([...data, { Director: dir, Movie: movie }]);
      setDir('');
      setMovie('');
    }
  };

  const handleRemove = (index) => {
    const content = [...data];
    content.splice(index, 1);
    setData(content);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Director and Movies</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <input
            type='text'
            placeholder='Director Name'
            value={dir}
            onChange={(e) => setDir(e.target.value)}
            style={{ marginRight: '10px', width: '40%', height: '30px' }}
          />
          <input
            type='text'
            placeholder='Movie Name'
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            style={{ marginRight: '10px', width: '40%', height: '30px' }}
          />
          <button style={{ backgroundColor: 'green', color: 'white' }} onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', width: '80%', marginBottom: '5px' }}>
            <div style={{ width: '50%', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              <span>{`${item.Director}`}</span>
            </div>
            <div style={{ width: '50%', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              <span>{`${item.Movie}`}</span>
            </div>
            <button style={{ backgroundColor: 'red', marginLeft: '5px' }} onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
