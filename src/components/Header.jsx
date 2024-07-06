import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

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

    return (
        <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
            <img className="w-44" src={LOGO} alt="logo" />
            {user && (
                <div className="flex items-center justify-center p-1 bg-slate-200">
                    <img
                        src={user?.photoURL}
                        alt="userIcon"
                        className="w-6 h-6 mr-2"
                    />
                    <button onClick={handleSignOut}>(Sign Out)</button>
                </div>
            )}
        </div>
    );
};

export default Header;
