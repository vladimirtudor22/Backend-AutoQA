import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Get all posts (GET -> /posts)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.get(`${API_BASE_URL}posts`);
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 200", () => {
    expect(response.status).to.equal(200);
  });
  it("Response should be an object", () => {
    expect(response.data).to.be.an("array");
  });
  it("Response should be longer than 1", () => {
    expect(response.data.length).to.be.greaterThan(1);
  });
});
