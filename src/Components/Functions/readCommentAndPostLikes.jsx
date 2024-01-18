import {threep0} from '../../apiConfig'

export const readCommentAndPostLikes = async ({ postIds = ["65a4338d68547551680b306e", "65a42e1a68547551680b3038", "65a426b768547551680b2fd0"] } = {}) => {
        try {
            const response = await fetch(`${threep0}/load-comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postIds }),
            });

            const data = await response.json();

            if (data.success) {
                return data
            } else {
                return []
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
}
