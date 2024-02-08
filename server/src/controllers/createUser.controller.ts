import { User } from "../models/user.model";

interface UserInfo {
  id: string;
  userName: string;
  imageUrl: string | undefined;
}

export default async function createUser({
  id,
  userName,
  imageUrl,
}: UserInfo) {
  try {
    const user = await User.findByPk(id);

    user?.update({user_name: userName, image_url: imageUrl})

    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
}
