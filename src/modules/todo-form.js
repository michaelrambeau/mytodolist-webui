export function validate(values) {
  const errors = {};
  const { title, body } = values;
  if (!title) {
    errors.title = "Todo title is required";
  }
  if (!body) {
    errors.body = "Todo body is required";
  }
  return errors;
}
