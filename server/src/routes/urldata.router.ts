import { Router } from "express";
const urldataRouter = Router();
import createUrl from "../controllers/createURL.controller";
import getUrl from "../controllers/getUrl.controller";

urldataRouter.post("/", async (req, res) => {
  const { url } = req.body;

  if (!url || typeof url !== "string")
    return res.status(400).json({ message: "Wrong request" });

  await fetch(url)
    .then(async () => {
      try {
        const createdURL = await createUrl({ url });

        return res.json(createdURL);
      } catch {
        return res.status(500).send("Internal server error");
      }
    })
    .catch((error) => {
      return res.status(404).json({ message: "Wrong domain. Try again" });
    });
});

urldataRouter.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  try {
    const getURLInfo = await getUrl({ shortUrl });
    return res.json(getURLInfo);
  } catch {
    return res.status(404).send({ message: "Couldn't find requested url" });
  }
});

export default urldataRouter;
