import { useReducer, useMemo } from "react";
import { UserContext } from "./createContext";

const initialState = {
    user: JSON.parse(localStorage.getItem("riot_session")) || null,
    loading: false,
    error: null
};

const userReducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_START':
            return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
            return { ...state, loading: false, user: action.payload, error: null };
        case 'AUTH_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'LOGOUT':
            return { ...state, user: null, error: null };
        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    const register = async (userData) => {
        dispatch({ type: 'AUTH_START' });
        try {
            const usersDB = JSON.parse(localStorage.getItem("users_db") || "[]");
            
            if (usersDB.find(u => u.email === userData.email)) {
                throw new Error("Utilizatorul există deja în baza de date!");
            }

            usersDB.push(userData);
            localStorage.setItem("users_db", JSON.stringify(usersDB));

            const { password, ...sessionUser } = userData;
            localStorage.setItem("riot_session", JSON.stringify(sessionUser));
            
            dispatch({ type: 'AUTH_SUCCESS', payload: sessionUser });
        } catch (err) {
            dispatch({ type: 'AUTH_FAILURE', payload: err.message });
            throw err;
        }
    };

    const login = async (userCredentials) => {
        dispatch({ type: 'AUTH_START' });
        try {
            const usersDB = JSON.parse(localStorage.getItem("users_db") || "[]");
            const foundUser = usersDB.find(u => u.email === userCredentials.email && u.password === userCredentials.password);

            if (!foundUser) {
                throw new Error("Email sau parolă incorectă!");
            }

            const { password: _, ...sessionUser } = foundUser;
            localStorage.setItem("riot_session", JSON.stringify(sessionUser));
            dispatch({ type: 'AUTH_SUCCESS', payload: sessionUser });
        } catch (err) {
            dispatch({ type: 'AUTH_FAILURE', payload: err.message });
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem("riot_session");
        dispatch({ type: 'LOGOUT' });
    };

    const value = useMemo(() => ({
        ...state,
        register,
        login,
        logout
    }), [state]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};