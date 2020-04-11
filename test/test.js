const Koa = require('koa');
const request = require('supertest');
const test = require('ava');

const expectCT = require('..');

const createServer = (options) => {
  const app = new Koa();
  app.use(expectCT(options));
  app.use(function (ctx) {
    ctx.body = { foo: 'bar' };
  });
  return app;
};

test('expectCT returns a function', (t) => {
  t.is(typeof expectCT(), 'function');
});

test.cb('set Expect-CT header without options', (t) => {
  let app;
  try {
    app = createServer({});
  } catch (err) {
    t.fail(err);
  }

  request(app.listen())
    .get('/')
    .expect('Expect-CT', 'max-age=0')
    .expect({ foo: 'bar' })
    .expect(200, t.end);
});

test.cb('set Expect-CT header with maxAge option', (t) => {
  const options = {
    maxAge: 60
  };

  let app;
  try {
    app = createServer(options);
  } catch (err) {
    t.fail(err);
  }

  request(app.listen())
    .get('/')
    .expect('Expect-CT', 'max-age=60')
    .expect({ foo: 'bar' })
    .expect(200, t.end);
});

test.cb('set Expect-CT header with maxAge and enforce options', (t) => {
  const options = {
    maxAge: 60,
    enforce: true
  };

  let app;
  try {
    app = createServer(options);
  } catch (err) {
    t.fail(err);
  }

  request(app.listen())
    .get('/')
    .expect('Expect-CT', 'enforce, max-age=60')
    .expect({ foo: 'bar' })
    .expect(200, t.end);
});

test.cb(
  'set Expect-CT header with maxAge, enforce, and reportUri options',
  (t) => {
    const options = {
      maxAge: 60,
      enforce: true,
      reportUri: 'https://reports.com'
    };

    let app;
    try {
      app = createServer(options);
    } catch (err) {
      t.fail(err);
    }

    request(app.listen())
      .get('/')
      .expect(
        'Expect-CT',
        'enforce, max-age=60, report-uri="https://reports.com"'
      )
      .expect({ foo: 'bar' })
      .expect(200, t.end);
  }
);
