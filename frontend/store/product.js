import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." }
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }))
        return { success: true, message: "Products Created Successfuly." }
    
    },

    fetchProduct: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data })
    },

    deleteProduct: async (productID) => {
        const res = await fetch(`/api/products/${productID}`, {
            method: "DELETE",

        }); 
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        //update product and fethched again immediately
        set((state)=> ({products: state.products.filter((product)=> product._id !== productID)}))
        return { success: true, message: "Product deleted successfully." }
        

    },

    updateProduct: async (pid,updateProduct) => {
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateProduct)
        });
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};

        //update product and fethched again immediately
        set((state)=> ({products: state.products.map((product)=> product._id === pid ? {...product,...updateProduct} : product)}))
        return { success: true, message: "Product updated successfully." }
    }
}));