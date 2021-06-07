const prod = {
    url: {
        API_URL: "https://nimdeewksht.sandbox.9ijakids.com/api.php"
    }
};
const dev = {
    url: {
        API_URL: "https://afternoon-ridge-35420.herokuapp.com/https://nimdeewksht.sandbox.9ijakids.com/api.php"
        //API_URL: "http://localhost:3000/"
    }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;