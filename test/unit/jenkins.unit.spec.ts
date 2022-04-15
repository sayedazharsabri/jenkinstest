import { Request, Response, NextFunction } from "express";
import { getSuccess } from '../../src/controllers/jenkins';

let mockRequest: Partial<Request>;
let mockResponse: Partial<Response>;

const mockResponseFn = () => {

    const res = { statusCode: 0, responseObject: {}, status() { }, json() { } };

    res.status = jest.fn().mockImplementation(code => {
        res.statusCode = code;
        return res;
    });

    res.json = jest.fn().mockImplementation(result => {
        res.responseObject = result;
        return res;
    });

    return res;
};


describe("Unit test for jenkins", () => {
    beforeEach(() => {
        mockRequest = {};
        mockResponse = mockResponseFn() as any;
    });

    it("getSuccess should be a function", () => {
        expect(typeof getSuccess).toBe('function');
    });
});
