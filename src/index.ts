import "./global-types";
import SchemaBuilder, { BasePlugin, type SchemaTypes } from "@pothos/core";

export * from "./types";

const pluginName = "graplix";
export default pluginName;

export class PothosGraplixPlugin<
	Types extends SchemaTypes,
> extends BasePlugin<Types> {}

SchemaBuilder.registerPlugin(pluginName, PothosGraplixPlugin);
