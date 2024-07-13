import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-48 flex pr-4">
            <img src={IMG_CDN_URL + posterPath} alt="poster_img" />
        </div>
    );
};

export default MovieCard;
