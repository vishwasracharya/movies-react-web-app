
const Auth = () => {
    return localStorage.getItem('token') ? true : false;
};

export { Auth };
