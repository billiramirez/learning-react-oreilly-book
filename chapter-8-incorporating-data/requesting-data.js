/** USING THEN/CATCH */

fetch(`https://www.api.github.com/users/moonhighway`)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);

/** USING ASYNC/AWAIT */
async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(
      `https://www.api.github.com/users/${githubLogin}`
    );

    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}
