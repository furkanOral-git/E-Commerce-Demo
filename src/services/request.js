
export async function request(url, data = false, method = 'GET') {
    const options = {
        method,
    }
    if (data && method === 'POST') {
        options.body = JSON.stringify(data);
    }
    try {

        const response = await fetch(url, options)
        const result = await response.json();
        
        if (response.ok && response.status === 200) return result
        else throw result

    } catch (error) {
        throw error
    }


}

export const post = async (url, data) => {

    try {
        const result = await request(url, data, 'POST');
        
        return result;

    } catch (error) {

        console.error('Post request failed:', error);
        throw error;
    }
}
export const get = async (url) => {
    try {

        const result = await request(url);
        return result

    } catch (error) {
        console.error("Get request failed:", error)
    }

}

