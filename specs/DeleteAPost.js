import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Delete a post (DELETE -> /posts/100)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.delete(`${API_BASE_URL}posts/100`);
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 200", () => {
    expect(response.status).to.equal(200);
  });
});
