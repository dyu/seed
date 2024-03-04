import { type Shape } from "#trpc/shapes.js";
import { type ShapeExtra } from "./shapeExtra.js";

export interface TemplateContext<Type extends string = string> {
  input: TemplateInput;
  maxLength: null | number;
  shape: Shape | null;
  type: Type;
}

export type TemplateInput = string;

export type TemplateResult = null | string;

export type TemplateFn = (api: TemplateContext) => TemplateResult;

export type TypeTemplates = TemplateFn | TypeTemplatesRecord;

export type TypeTemplatesRecord = Partial<
  Record<"__DEFAULT" | Shape | ShapeExtra, TemplateFn | null>
>;

export type Templates<Type extends string = string> = Partial<
  Record<Type, TypeTemplates>
>;
