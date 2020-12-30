import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "../../firebase";

function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const email = req.body;

    if (!validateEmail(email)) {
      res.status(400);
      res.end("Invalid email");
      return;
    }

    await firestore.collection("emails").doc(email).set({
      value: req.body,
      active: true,
      date: new Date(),
    });

    res.status(201);
    res.end("OK");
    return;
  } catch (error) {
    res.status(500);
    res.end("Server error");
    return;
  }
}
