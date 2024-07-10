import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });

        // Unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate('/error');
            });
    };

    const handleGptSearchClick = (e) => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img className="w-44" src={LOGO} alt="logo" />
            {user && (
                <div className="flex items-center justify-center">
                    {showGptSearch && (
                        <div className="lang">
                            <select
                                className="p-2 m-2 bg-gray-900 text-white"
                                onChange={handleLanguageChange}
                            >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option
                                        key={lang.identifier}
                                        value={lang.identifier}
                                    >
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    <div className="gptSearch mr-5 text-white border py-1 px-4 rounded-lg">
                        <button onClick={handleGptSearchClick}>
                            {showGptSearch ? 'Homepage' : 'GPT Search'}
                        </button>
                    </div>
                    <div className="signout flex items-center justify-center p-1 bg-slate-200">
                        <img
                            src={user?.photoURL}
                            alt="userIcon"
                            className="w-6 h-6 mr-2"
                        />
                        <button onClick={handleSignOut}>(Sign Out)</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
