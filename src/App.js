import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {apiUrl} from "./data";
import {filterData} from "./data";
import Filter from "./components/Filter";
import {useState} from 'react';
import {useEffect} from 'react';
import {toast} from 'react-toastify';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

const App = () => {

  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

 async function fetchData() {
  setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error) {
      toast.error("Something went wrong.");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]) 

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(75,78,108)]">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter 
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/ >)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
