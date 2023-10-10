import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Edit a post (PUT -> /posts/1)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.put(`${API_BASE_URL}posts/1`, {
        id: 1,
        title: "EditTitlePlaceholderTest",
        body: "EditBodyPlaceholderTest",
        userId: 1,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 200", () => {
    expect(response.status).to.equal(200);
  });
  it("Response should be an object", () => {
    expect(response.data).to.be.an("object");
  });
  it("ID should be 1", () => {
    expect(response.data.id).to.equal(1);
  });
  it("Title should be EditTitlePlaceholderTest", () => {
    expect(response.data.title).to.equal("EditTitlePlaceholderTest");
  });
  it("Body should be EditBodyPlaceholderTest", () => {
    expect(response.data.body).to.equal("EditBodyPlaceholderTest");
  });
  it("UserID should be 1", () => {
    expect(response.data.userId).to.equal(1);
  });
});
