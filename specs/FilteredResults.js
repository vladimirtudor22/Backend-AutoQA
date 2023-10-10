// posts?userId=1
import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Get all post where userId is 1 (GET -> /posts?userId=1)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.get(`${API_BASE_URL}posts?userId=1`);
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 200", () => {
    expect(response.status).to.equal(200);
  });
  it("Response should be an array", () => {
    expect(response.data).to.be.an("array");
  });
  it("Response should be longer than 1", () => {
    expect(response.data.length).to.be.greaterThan(1);
  });
  it("All psot should have userId 1", () => {
    response.data.map((el) => {
      expect(el.userId).to.equal(1);
    });
  });
});
