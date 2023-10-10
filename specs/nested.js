import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Get nested data (GET -> /posts/1/comments)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.get(`${API_BASE_URL}posts/1/comments`);
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 200", () => {
    expect(response.status).to.equal(200);
  });
  it("All result must have a name", () => {
    response.data.map((el) => {
      expect(el.name).not.null;
    });
  });
  it("All result must have a email", () => {
    response.data.map((el) => {
      expect(el.email).not.null;
    });
  });
  it("All result must have a body", () => {
    response.data.map((el) => {
      expect(el.body).not.null;
    });
  });
});
