import { useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function RepoList() {
    const { repos } = useContext(GithubContext)

    return (
        <div className="rounded-lg shadow-lg card bg-base-100">
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repositories
            </h2>
            {repos.map((repo) => (
                <h3>{repo.name}</h3>
            ))}
        </div>
    )
}

export default RepoList
