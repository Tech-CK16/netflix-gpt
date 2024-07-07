import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryConatiner = () => {
    const movies = useSelector((store) => store.movies);
    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-72 pl-12 relative z-10">
                    <MovieList
                        title={'Now Playing'}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={'Popular'}
                        movies={movies.popularMovies}
                    />
                    <MovieList
                        title={'Top Rated'}
                        movies={movies.nowPlayingMovies}
                    />
                    <MovieList
                        title={'Upcoming'}
                        movies={movies.popularMovies}
                    />
                </div>
            </div>
        )
    );
};

export default SecondaryConatiner;
