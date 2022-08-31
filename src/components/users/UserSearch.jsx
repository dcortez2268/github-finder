import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')
    const { users, searchUsers, clearSearch } = useContext(GithubContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            alert('Please enter something')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    const handleClear = () => {
        clearSearch()
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pr-40 bg-gray-200 input input-lg text-black"
                            placeholder="Search"
                            value={text}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                        >
                            Go
                        </button>
                    </div>
                </div>
            </form>
            {users.length > 0 && (
                <button
                    className="button btn btn-ghost btn-lg"
                    onClick={handleClear}
                >
                    Clear
                </button>
            )}
        </div>
    )
}

export default UserSearch