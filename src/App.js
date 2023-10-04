import Child from './Child.js';

function App() {
  const myKids = [0, 1, 2];
  return (
    <div>
      {myKids.map((kid) => (
        <Child />
      ) 

      }
 
    </div>
    );
  }
export default App;
