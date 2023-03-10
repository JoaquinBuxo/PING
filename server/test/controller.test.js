const {
	describe,
	expect,
	test,
	beforeAll,
	afterAll,
} = require("@jest/globals");
const mongoose = require("mongoose");
const { router } = require("../router");
const { app } = require("../index");
const request = require("supertest");
const Tagline = require("../models/Tagline");
const clearDB = require("../models/clearDB");

// const BASE_URL = 'https://ping-pncs.onrender.com'
const BASE_URL = "http://localhost:5000";

const testTagline1 = {
	tagline: "This is a test Tagline",
};

const testTagline2 = {
	tagline: "This is a test Tagline2",
};

const testUser1 = {
	username: "Vlosada",
	email: "vlosada@gmail.com",
	role: "helper",
	resquests: [],
	socketID: "12345",
	online: true,
};
const testUser2 = {
	username: "Joaquin",
	email: "Joaquin@gmail.com",
	role: "helpee",
	resquests: [],
	socketID: "123456",
	online: true,
};

describe("Taglines test", () => {
	describe("POST /postTagline", () => {
		it("Should responds with status 201", async () => {
			const res = await request(BASE_URL)
				.post("/postTagline")
				.send(testTagline1);
			expect(res.status).toBe(201);
		});
		it("Should specify json in the content type header", async () => {
			const res = await request(BASE_URL)
				.post("/postTagline")
				.send(testTagline2);
			expect(res.header["content-type"]).toEqual(
				expect.stringContaining("json")
			);
		});
	});

	describe("GET /getTaglines", () => {
		it("Should respond get taglines, status 200", async () => {
			const res = await request(BASE_URL).get("/getTaglines");
			expect(res.status).toBe(200);
		});
		it("Should specify json in the content type header", async () => {
			const res = await request(BASE_URL).get("/getTaglines");
			expect(res.header["content-type"]).toEqual(
				expect.stringContaining("json")
			);
		});
		it("Should get the taglines on DB", async () => {
			const res = await request(BASE_URL).get("/getTaglines");
			const tags = res.body.map((tag) => tag.tagline);
			expect(tags).toEqual([testTagline1.tagline, testTagline2.tagline]);
		});
	});

});

describe("Users tests:", () => {
	describe("POST /createUser", () => {
		it("Should responds with status 201:", async () => {
			const res = await request(BASE_URL).post("/createUser").send(testUser1);
			expect(res.status).toBe(201);
		});
		it("Should specify json in the content type header", async () => {
			const res = await request(BASE_URL).post("/createUser").send(testUser2);
			expect(res.header["content-type"]).toEqual(
				expect.stringContaining("json")
			);
		});
	});
	describe("GET /getAllUsers", () => {
		it("Should respond get users, status 200", async () => {
			const res = await request(BASE_URL).get("/getAllUsers");
			expect(res.status).toBe(200);
		});
		it("Should specify json in the content type header", async () => {
			const res = await request(BASE_URL).get("/getAllUsers");
			expect(res.header["content-type"]).toEqual(
				expect.stringContaining("json")
			);
		});
		it("Should get the users on DB", async () => {
			const res = await request(BASE_URL).get("/getAllUsers");
			const users = res.body.map((user) => user.username);
			expect(users).toEqual([testUser1.username, testUser2.username]);
		});
	});
	describe("GET /getUser", () => {
		it("Should respond get users, status 200", async () => {
			const res = await request(BASE_URL).get("/getUser");
			expect(res.status).toBe(200);
		});
		it("Should specify json in the content type header", async () => {
			const res = await request(BASE_URL).get("/getUser");
			expect(res.header["content-type"]).toEqual(
				expect.stringContaining("json")
			);
		});
		it("Should get the users on DB", async () => {
			const res = await request(BASE_URL).get("/getUser");
			const users = res.body.map((user) => user.username);
			expect(users).toEqual([testUser1.username, testUser2.username]);
		});
	})
  
});

afterAll(async () => {
	await clearDB();
	mongoose.connection.close();
});