

export const getUserData = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const setUserData = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
}

export const clearUserData = () => {
    localStorage.removeItem('user');
}

export const getUserToken = () => {
    const user = getUserData();
    if (user) {
        return user.accessToken;
    } else {
        return null;
    }
}

export const submitWrapper = (ctx, handler) => {
    return function (event) {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.currentTarget));
        handler(ctx, formData, event);
    }
}

export const isValid = (data) => {
    return !Object.values(data).some(el => el == '');
}

export const enableErrorBox = (message) => {
    const errorBox = document.querySelector('.notification');
    const boxMessage = document.querySelector('.msg');

    errorBox.style.display = "block";
    boxMessage.textContent = message;

    setTimeout(() => {
        errorBox.style.display = "none";
        boxMessage.textContent = "";
    }, 3000);
}