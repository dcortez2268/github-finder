// Get search results
export const searchUsers = async (text) => {
    const params = new URLSearchParams({ q: text })

    const response = await fetch(
        `https://api.github.com/search/users?${params}`
    )
    const { items } = await response.json()

    return items
}

// Get single user
export const getUser = async (login) => {
    const response = await fetch(`https://api.github.com/users/${login}`)

    if (response.status === '404') {
        window.location = '/notfound'
    } else {
        const data = await response.json()
        return data
    }
}

// Get user repos
export const getUserRepos = async (login) => {
    // searches for last 10 created public repositories
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })

    const response = await fetch(
        `https://api.github.com/users/${login}/repos?${params}`
    )
    const data = await response.json()
    return data
}
