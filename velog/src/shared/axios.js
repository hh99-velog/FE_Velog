import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "",
  // 헤더에 넣을 정보
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const apis = {
  // 로그인 API
  // data  = {username:id , password: pw}
  signIn: (data) => instance.post("/api/user/login", data),
  // data  = {username:id ,nickname:nickname, pwd: pw, pwdConfirm: pw}
  signUp: (data) => instance.post("/api/user/signup", data),
  // username = {username:id}
  idDuplicate: (username) => instance.post("/user/id/duplicate", username),
  // nickname = {nickname:nickname}
  nickNameDuplicate: (nickname) => instance.post("/user/nickname/duplicate", nickname),

  // Board API
  getPost: () => instance.get(`/api/boards`),
  // data = {title: title, content: content, nickname:nickname, multipartFile: 이미지}
  addPost: (data) => instance.post("/api/boards", data),

  //detail Board
  // board_id:board_id
  getDetailPost: (board_id) => instance.get(`/api/boards/detail/${board_id}`),
  // board_id:board_id / data = {title: title, content: content, img:img}
  editDetailPost: (board_id, data) => instance.put(`/api/boards/detail/${board_id}`, data),
  // board_id:board_id
  deleteDetailPost: (board_id) => instance.delete(`/api/boards/detail/${board_id}`),

  // 좋아요 API
  // board_id:board_id / 토큰은 헤더로 전송
  getLike: (board_id) => instance.get(`/api/likes/${board_id}`),
  addLike: (board_id) => instance.post(`/api/likes/${board_id}`), 
  deleteLike: (board_id) => instance.delete(`/api/likes/${board_id}`),

  // 코멘트 API
  // id:id
  getComment: (id) => instance.get(`/api/boards/detail/${id}/comment`),
  deleteComment: (id, data) => instance.delete(`/api/boards/comment/${id}`, data),
  // data = {content: content, nickname:nickname}
  addComment: (id, data) => instance.post(`/api/boards/comment/${id}`, data),
  editComment: (id, data) => instance.put(`/api/boards/comment/${id}`, data),
};
