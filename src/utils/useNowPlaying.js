import { useDispatch } from "react-redux";
import { addMovies } from "./MovieSlice";
import { useEffect } from "react";


const useNowPlaying = () => {
    const dispach = useDispatch()

  const movieList = async () => {
    const api_key = "99a6abd19d65dfd80e3d2644e29120e7";
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=1`);
    const jsonData = await res.json();
    dispach(addMovies(jsonData?.results))
  }
  
  useEffect(() => {
    movieList();
  }, []);
}

export default useNowPlaying