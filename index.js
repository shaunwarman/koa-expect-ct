function isValid(maxAge) {
  return Number.isInteger(maxAge) && maxAge >= 0;
}

function getMaxAge(maxAge) {
  if (isValid(maxAge)) {
    return maxAge;
  }

  throw new Error(
    `${maxAge} is not a valid value for maxAge. Please choose a positive integer.`
  );
}

function createHeader(options) {
  const directives = [];

  const { maxAge = 0, enforce = false } = options;

  if (enforce) {
    directives.push('enforce');
  }

  directives.push('max-age=' + getMaxAge(maxAge));
  if (options.reportUri) {
    directives.push('report-uri="' + options.reportUri + '"');
  }

  return directives.join(', ');
}

module.exports = (options = {}) => {
  const header = createHeader(options);

  return async (ctx, next) => {
    ctx.set('Expect-CT', header);
    await next();
  };
};
