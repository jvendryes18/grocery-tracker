export const getItems = async () => {
    const response = await fetch("http://localhost:8080/items", {
        method: "GET",
    });

    const data = await response.json();
    return data;
}

export const postItems = async (item) => {
    const response = await fetch("http://localhost:8080/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item)
    });

    return await response.json();
}