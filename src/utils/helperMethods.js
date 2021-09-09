export function formatQuestion(user, question, authed) {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = user;
  return {
    name,
    id,
    optionOne: optionOne,
    optionTwo: optionTwo,
    avatar: avatarURL,
    hasAnswerd: Object.keys(authed.answers).includes(id),
  };
}

export function isInclude(authedUser, question) {
  const { id } = question;
  return Object.keys(authedUser.answers).includes(id);
}

export function sum(a, b) {
  return a + b;
}
