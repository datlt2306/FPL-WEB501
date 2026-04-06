const API_URL = `http://localhost:3000/products`;

export const api = {
    getProducts: async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading products:', error);
            return [];
        }
    },
    addProduct: async (product) => {
        try {
            fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            return response.json();
        } catch (error) {

        }
    }
}