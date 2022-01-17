import axios from 'axios';

const postToDevTo = (post) => {
  const devToToken = process.env.DEV_TO_TOKEN;

  const { title, content, tags } = post;

  const article = {
    title: title,
    body_markdown: content,
    published: true,
    tags: tags.split(','),
  };

  const postBody = JSON.stringify({
    article: article,
  });

  const options = {
    method: 'post',
    url: 'https://dev.to/api/articles',
    data: postBody,
    headers: {
      'Content-Type': 'application/json',
      'api-key': devToToken,
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

export default postToDevTo;
