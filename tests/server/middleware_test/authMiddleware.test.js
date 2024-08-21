//@author : 許哲誠
const jwt = require('jsonwebtoken');
const authMiddleware = require('../../../server/middlewares/authToken');

describe('測試token middleware', () => {
  let req, res, next;

  beforeEach(() => {
    process.env.JWT_SECRET = "0319d00b18517c3fe068215a841310bee4e163a28b7df8ffee317be86499d3691b4b45a5cb10fe719208772a1830d68a13de7f89649afc951a931045740e9e18";
    req = {
      cookies: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  afterEach(() => {
    delete process.env.JWT_SECRET;
  });
  
  test('token有效要可以用next()', () => {
    const token = jwt.sign({ userId: '123' }, process.env.JWT_SECRET);
    req.cookies.token = token;
    authMiddleware.verifyToken(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.user).toBeDefined();
    expect(req.user.userId).toBe('123');
  });
});