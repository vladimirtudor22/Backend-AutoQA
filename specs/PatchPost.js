import { expect } from "chai";
import axios from "axios";
import { API_BASE_URL } from "../constants.js";

var response;
describe("Patch a post (PATCH -> /posts/1)", () => {
  it("Should be able to fetch data", async () => {
    try {
      response = await axios.patch(`${API_BASE_URL}posts/1`, {
        title: "TestTitlePlaceholder",
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
  it("Title should be TestTitlePlaceholder", () => {
    expect(response.data.title).to.equal("TestTitlePlaceholder");
  });
  it("Body should be patched", () => {
    expect(response.data.body).to.equal(
      "quia et suscipit\n" +
        "suscipit recusandae consequuntur expedita et cum\n" +
        "reprehenderit molestiae ut ut quas totam\n" +
        "nostrum rerum est autem sunt rem eveniet architecto"
    );
  });
  it("userId should be 1", () => {
    expect(response.data.userId).to.equal(1);
  });
});
