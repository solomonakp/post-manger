import axios from 'axios';

import { randomBytes } from 'crypto';

const postToHashNode = (post) => {
  const hashNodeToken = process.env.HASH_NODE_TOKEN;

  const {
    title,
    content,
    tags,
    image: { url },
  } = post;

  const tagsArray = tags.split(',').map((tag) => {
    return {
      _id: randomBytes(12).toString('hex'),
      name: tag,
      slug: tag,
    };
  });

  const article = {
    title: title,
    contentMarkdown: content,
    tags: tagsArray,
    coverImageURL: url,
  };
  const query =
    'mutation createStory($input: CreateStoryInput!){ createStory(input: $input){ code success message } }';
  const postBody = JSON.stringify({
    query: query,
    variables: {
      input: article,
    },
  });
  const options = {
    method: 'post',
    url: 'https://api.hashnode.com',
    data: postBody,
    headers: {
      'Content-Type': 'application/json',
      Authorization: hashNodeToken,
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

export default postToHashNode;
