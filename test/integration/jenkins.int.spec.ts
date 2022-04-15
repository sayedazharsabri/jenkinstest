import app from "../../src/app";
import request from "supertest";

describe("Test to jenkins APIs", () => {
    it("GET / should return status 200 with valid message", async () => {
        const result = await request(app).get("/");
        expect(result.status).toEqual(200);
        expect(JSON.parse(result.text)['status']).toBe("success");
    });
})

