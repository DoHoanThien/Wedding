const apiUrl =
  "https://a01krphjoa.execute-api.ap-southeast-1.amazonaws.com/wedding-api";

const getComment = async () => {
  const res = await fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      return error;
    });

  return res;
};

const postComment = async (formData: { username: string; text: string }) => {
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response;
    })
    .catch((error) => {
      return error;
    });

  return res;
};

export { getComment, postComment };
