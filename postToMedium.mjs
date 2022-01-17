import axios from 'axios';

const postToMedium = async (post) => {
  const userId = process.env.MEDIUM_USER_ID;

  const mediumToken = process.env.MEDIUM_TOKEN;

  const authorization = `Bearer ${mediumToken}`;

  const { title, content, tags } = post;

  const article = {
    title: title,
    contentFormat: 'markdown',
    content: content,
    publishStatus: 'public',
    tags: tags.split(','),
  };

  const postBody = JSON.stringify(article);

  const options = {
    method: 'post',
    url: `https://api.medium.com/v1/users/${userId}/posts`,
    data: postBody,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization,
    },
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export default postToMedium;
