export const read = async ({skip, limit, isprivate, userId}) => {
    try {
        const res = await fetch(
            `http://localhost:3002/load-post?private=${isprivate}&userId=${userId}&defaultLimit=${limit}&skip=${skip}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => res.json())
        return res.data
    } catch (error) {
        throw new Error(error)
    }
}
