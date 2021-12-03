import { useEffect, useState } from 'react';
import Tour from './components/Tour';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tour, setTour] = useState([]);
  const [Load, setLoad] = useState(false);
  const [error, setError] = useState();

  function getApiData(){ 
    fetch(url)
    .then((res) => {
      //return res.json();
      if(res.status >= 200 && res.status <= 299){
          return res.json();
      } else{
        setError(res.statusText);
      }
    })
    .then((data) => {
      setTour(data);
      setLoad(true);
      }).catch((err) => {
     setError(err);
    })  
  };  
  useEffect(() => {
    getApiData(); 
  }, [])

  if (error || !Array.isArray(tour)) {
    return <p>There was an error loading your data!</p>;
  }

  if(!Load){
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="App">
      {(<Tour  contents={tour} settour={setTour} tour={tour}/>)}
    </div>
  );

    // const refreshPage = () =>{
    //   window.location.reload();
    //   }

  // if( deleteTour === true && tour.length <=0 ){
  //   return <div className="section">
  //           <h3>No more Tours Remaining</h3>
  //           <button className="btn" onClick ={refreshPage}>Refresh</button>;
  //         </div>
  // } 

}

export default App;
