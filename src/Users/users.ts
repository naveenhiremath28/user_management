
export const Users = {
    type: "object",
    properties: {
        id: { type: "number" },
        name: { type: "string" },
        age: { type: "number" },
        email: { type: "string" }
    },
    required: ["id", "name", "age"]
}