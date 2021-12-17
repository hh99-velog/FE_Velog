export const emailCheck = (email) => {
    //  일반적인 이메일 체크
    let _reg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]*([-_.0-9a-zA-Z])*.([a-zA-Z])*/
    return _reg.test(email)
}

export const checkPassword = (pwd) => {
    //  6 ~ 25자 영문, 숫자 조합
    var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,25}$/
    return regExp.test(pwd)
}