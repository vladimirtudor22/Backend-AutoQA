import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Add a new post (POST -> /posts)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.post(`${API_BASE_URL}posts`, {
        title: "placeHolderDemoTest",
        body: "plcaHolderDemoTestBodyTest",
        userId: 1,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      throw new Error("Failed to fetch data from API");
    }
  });
  it("Status should be 201", () => {
    expect(response.status).to.equal(201);
  });
  it("Response should be an object", () => {
    expect(response.data).to.be.an("object");
  });
  it("Response id should be grater or equal than 100", () => {
    expect(response.data.id).to.be.greaterThanOrEqual(100);
  });
  it("Response title should be placeHolderDemoTest", () => {
    expect(response.data.title).to.equal("placeHolderDemoTest");
  });
  it("Response body should be plcaHolderDemoTestBodyTest", () => {
    expect(response.data.body).to.equal("plcaHolderDemoTestBodyTest");
  });
  it("Response userID should be 1", () => {
    expect(response.data.userId).to.equal(1);
  });
});
