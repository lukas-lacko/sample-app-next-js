
/** 
* This file has been auto-generated by '@kontent-ai/model-generator@8.0.0-14'.
* 
* (c) Kontent.ai
*  
* -------------------------------------------------------------------------------
* 
* Project: Ficto Healthtech [QA Source project]
* Environment: Production 
* Id: b0255462-358c-007b-0be0-43ee125ce1f0
* 
* -------------------------------------------------------------------------------
**/

import type { Elements, Snippet } from "@kontent-ai/delivery-sdk";

/**
 * Metadata
 *
 * Id: 754cddda-44fc-590c-8663-a647690851d9
 * Codename: metadata
 */
export type Metadata = Snippet<
  MetadataElementCodenames,
  {
    /**
     * Title
     *
     * Type: text
     * Required: false
     * Codename: metadata__title
     * Id: 49abab33-e5d1-55bb-9c1b-2f144430da28
     */
    readonly metadata__title: Elements.TextElement;
    /**
     * Description
     *
     * Type: text
     * Required: false
     * Codename: metadata__description
     * Id: e57614c6-e299-51c3-83bc-961f053dfe17
     */
    readonly metadata__description: Elements.TextElement;
    /**
     * Keywords
     *
     * Type: text
     * Required: false
     * Codename: metadata__keywords
     * Id: f46d7c9a-a08f-5987-83e7-a061dd036842
     * Guidelines: Keywords should be separated by delimiter ","
     */
    readonly metadata__keywords: Elements.TextElement;
  }
>;

/**
 * Type representing all available element codenames for Metadata
 */
export type MetadataElementCodenames =
  | "metadata__title"
  | "metadata__description"
  | "metadata__keywords";
