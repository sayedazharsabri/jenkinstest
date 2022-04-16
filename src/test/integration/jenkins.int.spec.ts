import app from "../../app";
import request from "supertest";

describe("Test to jenkins APIs", () => {
    it("GET / should return status 200 with valid message", async () => {
        const result = await request(app).get("/");
        expect(result.status).toEqual(200);
        const key = 'status';
        expect(JSON.parse(result.text)[key]).toBe("success");
    });
})

