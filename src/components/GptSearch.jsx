import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
    return (
        <div
            className="bg-black text-white h-lvh"
            style={{ backgroundImage: `url(${BG_URL})` }}
        >
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    );
};

export default GptSearch;
