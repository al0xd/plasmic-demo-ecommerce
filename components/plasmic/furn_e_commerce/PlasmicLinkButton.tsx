// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tskKM7gWsfxPWKdeF2whbc
// Component: F9ktD9kX0Pjhcl
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: tskKM7gWsfxPWKdeF2whbc/projectcss
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: F9ktD9kX0Pjhcl/css

export type PlasmicLinkButton__VariantMembers = {
  type:
    | "solidOrange"
    | "solidGray"
    | "blankOrange"
    | "outlineGray"
    | "blankGray";
  size: "small";
};

export type PlasmicLinkButton__VariantsArgs = {
  type?: SingleChoiceArg<
    "solidOrange" | "solidGray" | "blankOrange" | "outlineGray" | "blankGray"
  >;
  size?: SingleChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicLinkButton__VariantsArgs;
export const PlasmicLinkButton__VariantProps = new Array<VariantPropType>(
  "type",
  "size"
);

export type PlasmicLinkButton__ArgsType = {
  href?: string;
  text?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLinkButton__ArgsType;
export const PlasmicLinkButton__ArgProps = new Array<ArgPropType>(
  "href",
  "text"
);

export type PlasmicLinkButton__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultLinkButtonProps {
  href?: string;
  text?: React.ReactNode;
  type?: SingleChoiceArg<
    "solidOrange" | "solidGray" | "blankOrange" | "outlineGray" | "blankGray"
  >;
  size?: SingleChoiceArg<"small">;
  className?: string;
}

function PlasmicLinkButton__RenderFunc(props: {
  variants: PlasmicLinkButton__VariantsArgs;
  args: PlasmicLinkButton__ArgsType;
  overrides: PlasmicLinkButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__size_small]: hasVariant(variants, "size", "small"),
        [sty.root__type_blankGray]: hasVariant(variants, "type", "blankGray"),
        [sty.root__type_blankOrange]: hasVariant(
          variants,
          "type",
          "blankOrange"
        ),
        [sty.root__type_outlineGray]: hasVariant(
          variants,
          "type",
          "outlineGray"
        ),
        [sty.root__type_solidGray]: hasVariant(variants, "type", "solidGray"),
        [sty.root__type_solidOrange]: hasVariant(
          variants,
          "type",
          "solidOrange"
        )
      })}
      component={Link}
      href={args.href !== undefined ? args.href : "#"}
      platform={"nextjs"}
    >
      <p.PlasmicSlot
        defaultContents={"Do the thing"}
        value={args.text}
        className={classNames(sty.slotText, {
          [sty.slotText__type_blankGray]: hasVariant(
            variants,
            "type",
            "blankGray"
          ),
          [sty.slotText__type_blankOrange]: hasVariant(
            variants,
            "type",
            "blankOrange"
          ),
          [sty.slotText__type_outlineGray]: hasVariant(
            variants,
            "type",
            "outlineGray"
          ),
          [sty.slotText__type_solidGray]: hasVariant(
            variants,
            "type",
            "solidGray"
          ),
          [sty.slotText__type_solidOrange]: hasVariant(
            variants,
            "type",
            "solidOrange"
          )
        })}
      />
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicLinkButton__VariantsArgs;
  args?: PlasmicLinkButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicLinkButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicLinkButton__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
