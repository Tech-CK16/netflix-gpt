import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const fetchMovie = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' +
                movie +
                '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    };

    const handleSearchMovieTMDB = async () => {
        const movieList = searchText.current.value.split(',');

        const promiseArray = movieList.map((movie) => fetchMovie(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(
            addGptMovieResult({
                movieNames: movieList,
                movieResults: tmdbResults,
            })
        );
    };

    return (
        <div className="pt-[10%]">
            <form
                action=""
                className="w-[50%] m-auto p-3 bg-black rounded-lg"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        ref={searchText}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        onClick={handleSearchMovieTMDB}
                    >
                        {lang[langKey].search}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GptSearchBar;
