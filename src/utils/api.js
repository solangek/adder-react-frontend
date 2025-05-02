// src/utils/api.js
/**
 * A simple API call function using Fetch API
 * @param url
 * @param method
 * @param body
 * @returns {Promise<any>}
 */
export const apiCall = async (url, method, body) => {
    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};
