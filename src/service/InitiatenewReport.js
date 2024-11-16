export const InitiatenewReport= {
    getProductsData() {
        return [
            {
                id: '1000',
                Demo:'First select the period to view',
                name: '10th Mar 23',
                    country: {
                        name: 'UO',
                        code: 'eg'
                    },
                    company: 'Mark',
                    status: '4h',
                    verified: true,
                    activity: 0,
                    representative: {
                        name: 'Bryan'
                    },
                    balance: 82429
            },
            {
                id: '1000',
                name: '14th Mar 23',
                    country: {
                        name: 'D',
                        code: 'cl'
                    },
                    company: 'Tadeu',
                    status: '6h',
                    verified: false,
                    activity: 59,
                    representative: {
                        name: 'Bryan',
                    },
                    balance: 45250
            },
            {
                id: 1010,
                name: '14th Mar 23',
                country: {
                    name: 'S'
                },
                company: 'Joan',
                status: '8h',
                representative: {
                    name: 'Jean'
                },
                balance: 71169
            },
            {
                id: 1015,
                name: '14th Mar 23',
                country: {
                    name: 'S'
                },
                company: 'Joan',
                status: '8h',
                representative: {
                    name: 'Jean'
                },
                balance: 64533
            },
            
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

