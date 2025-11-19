import prisma from "../../configs/prisma.js";

class UserInfo {
  async getUserInfo() {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  }
}

const userInfo = new UserInfo();
export default userInfo;
