import { UrlData } from "../models/urldata.model";

interface urlinfo {
  shortUrl: string;
}

export default async function ({ shortUrl }: urlinfo) {
  try {
    const urlInfo = await UrlData.findOne({ where: { shortURL: shortUrl } });
    return urlInfo;
  } catch (error) {
    return error;
  }
}
