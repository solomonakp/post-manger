import postToDevTo from './postToDevTo.mjs';

import postToMedium from './postToMedium.mjs';

import postToHashNode from './postToHashNode.mjs';

export const handler = async (event) => {
  const body = JSON.parse(event.body);

  const { entry: post } = body;

  const postResults = await Promise.allSettled([
    postToDevTo(post),
    postToMedium(post),
    postToHashNode(post),
  ]);

  return postResults;
};
