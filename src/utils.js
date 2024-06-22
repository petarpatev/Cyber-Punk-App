

export const getUserData = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const clearUserData = () => {
    localStorage.removeItem('user');
}

export const getUserToken = () => {
    const user = getUserData();
    if(user) {
        return user.accessToken;
    } else {
        return null;
    }
}