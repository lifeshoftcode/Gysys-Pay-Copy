export const productService = {
    createProduct: async (data) => {
        return await Product.create(data);
    },
    getProduct: async (id) => {
        return await Product.findByPk(id);
    },
    getProducts: async () => {
        return await Product.findAll();
    },
    updateProduct: async (id, data) => {
        const product = await Product.findByPk(id);
        if (product) {
            return await product.update(data);
        }
        return null;
    },
    deleteProduct: async (id) => {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            return true;
        }
        return false;
    }
};