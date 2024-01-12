import { isEmpty } from "lodash";
import { lastKeyType } from "@/layout/landdingPage/comment";

const apiUrl =
  "https://a01krphjoa.execute-api.ap-southeast-1.amazonaws.com/wedding-api";

const getComment = async (lastkey: lastKeyType) => {
  const res = await fetch(
    `${apiUrl}?page-size=10${!isEmpty(lastkey) ? `&last-key=${lastkey}` : ""}`
  );

  return res.json();
};

const postComment = async (formData: { username: string; text: string }) => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  return res;
};

export { getComment, postComment };
