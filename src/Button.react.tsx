/*
 * (c) Sellution. Confidential and propietary
 *
 */

import type {StyleX$CSS} from "@ladifire-opensource/stylex";
import type {Width, Margin} from "types/css";

import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  disabled: {
    backgroundColor: "#F7F9FB",
    border: "1px solid #E7EAEC",
    color: "#E7EAEC",
    pointerEvents: "none",
  },
  loader: {
    position: "absolute",
    right: "8px",
    top: "0",
  },
  root: {
    backgroundColor: "#4492FC",
    border: "1px solid #4492FC",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
    display: "inline-block",
    fontSize: "14px",
    height: "36px",
    lineHeight: "34px",
    paddingLeft: "20px",
    paddingRight: "20px",
    position: "relative",
    textAlign: "center",
  },
  secondary: {
    backgroundColor: "#FFF",
    border: "1px solid #DDD",
    color: "#3f3f3f",
  },
});

type Props = {
  label: string;
  isDisabled?: boolean;
  onClick?: () => void;
  size?: number;
  variant?: "primary" | "secondary";
  xstyle?: StyleX$CSS<Width & Margin>;
};

export default function Button({
  label,
  isDisabled,
  onClick,
  xstyle,
  variant = "primary",
}: Props) {
  return (
    <button
      className={stylex([
        styles.root,
        isDisabled ? styles.disabled : null,
        variant === "secondary" ? styles.secondary : null,
        xstyle ?? null,
      ])}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
