import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Get post with specific id (GET -> /posts/1)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.get(`${API_BASE_URL}posts/1`);
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
  it("Should have title", () => {
    expect(response.data.title).not.null;
  });
  it("Should have body", () => {
    expect(response.data.body).not.null;
  });
  it("Should have userID", () => {
    expect(response.data.userId).not.null;
  });
});
