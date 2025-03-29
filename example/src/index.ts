import SchemaBuilder from "@pothos/core";
import GraplixPlugin from "pothos-plugin-graplix";

const builder = new SchemaBuilder({
	plugins: [GraplixPlugin],
});

builder.queryType({});

const schema = builder.toSchema();

console.log(schema);
