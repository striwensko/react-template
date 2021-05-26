/*
 * (c) Sellution. Confidential and propietary
 *
 */
import * as css from "csstype";

export type Margin = Pick<
  css.Properties,
  "margin" | "marginLeft" | "marginRight" | "marginTop" | "marginBottom"
>;
export type Padding = Pick<
  css.Properties,
  "padding" | "paddingLeft" | "paddingRight" | "paddingTop" | "paddingBottom"
>;

export type Width = Pick<css.Properties, "width">;
export type Height = Pick<css.Properties, "height">;

export type TextAlign = Pick<css.Properties, "textAlign">;
export type Position = Pick<
  css.Properties,
  "position" | "top" | "bottom" | "left" | "right"
>;
