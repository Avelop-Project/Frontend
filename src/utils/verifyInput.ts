export const emailReg = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
export const pwdReg = /^[A-Za-z0-9]{4,10}$/;
// 알파벳 대소문자, 숫자로 시작하고 끝나며, 길이가 4~10
// export const idReg = new RegExp("/^[A-Za-z0-9]{4,10}$/");
export const idReg = /^[A-Za-z0-9]{4,10}$/;
export const nicknameReg = /^[A-Za-z0-9]{4,10}$/;
