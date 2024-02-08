import { UrlData } from "../models/urldata.model";
import { User } from "../models/user.model";

interface urlinfo {
  url: string;
  userId: string | undefined
}

export default async function ({ url, userId }: urlinfo) {
  const urlShortened = Math.random().toString(36).substring(2, 7);

  const user = await User.findByPk(userId)

  try {
    const createdURL = await UrlData.create({
      originalURL: url,
      shortURL: urlShortened,
      clickedTimes: 0
    });

    if(user){
      user.$add("urlData", createdURL)
    }

    return createdURL;
  } catch (error) {
    return error;
  }
}
