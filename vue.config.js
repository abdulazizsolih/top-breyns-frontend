module.exports = {
    publicPath: '/top-breyns-frontend/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/scss/app.scss";
                `,
            },
        },
    },
};