import { test, expect } from "../../../fixtures/userFixture";
import { getUserDetailByEmail } from "../../../api/auth.api";

test("user can signup and login successfully @e2e", async ({ user }) => {
  const response = await getUserDetailByEmail(user.email);
  expect(response.status).toBe(200);
  expect(response.data.responseCode).toBe(200);
});
