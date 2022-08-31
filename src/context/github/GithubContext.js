import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: false,
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Get search results
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({ q: text })

        const response = await fetch(
            `http://api.github.com/search/users?${params}`
        )
        const { items } = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }

    // Get single user
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`http://api.github.com/users/${login}`)

        if (response.status === '404') {
            window.location = '/notfound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }
    }

    //clears users from state
    const clearSearch = () => dispatch({ type: 'DELETE_USERS' })

    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                searchUsers,
                clearSearch,
                getUser,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
