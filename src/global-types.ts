import type { SchemaTypes } from "@pothos/core";
import type { PothosGraplixPlugin } from ".";
import type { GraplixPluginOptions } from "./types";

declare global {
	export namespace PothosSchemaTypes {
		export interface Plugins<Types extends SchemaTypes> {
			graplix: PothosGraplixPlugin<Types>;
		}

		// biome-ignore lint/correctness/noUnusedVariables: declaration merging
		export interface SchemaBuilderOptions<Types extends SchemaTypes> {
			graplix?: GraplixPluginOptions;
		}
	}
}
