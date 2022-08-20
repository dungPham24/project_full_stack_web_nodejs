import axios from "../../axios";
import * as queryString from "query-string";

const AdminService = {
  /**
   * Đăng nhập hệ thống
   * {
   *  "username": "string",
   *  "password": "string"
   * }
   */
  login(loginBody) {
    return axios.post(`/admin/login`, loginBody);
  },
};

export default AdminService;
