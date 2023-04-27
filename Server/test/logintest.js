const assert = require("assert");
const login = require("../../src/pages/Auth/login_test");

describe("Login", function () {
  describe("#authenticate()", function () {
    it("should return true if the username and password are valid", function () {
      assert.equal(
        login.authenticate("viraat.mvss@gmail.com", "password123"),
        true
      );
    });

    it("should return false if the username is invalid", function () {
      assert.equal(login.authenticate("invalidusername", "password123"), false);
    });

    it("should return false if the password is invalid", function () {
      assert.equal(login.authenticate("viraat.mvss@gmail.com", ""), false);
    });
  });
});
