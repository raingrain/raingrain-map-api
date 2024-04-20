import { describe, expect, test } from "vitest";
import ErrorData from "../../assets/data/ErrorData.json";
import { readGeoJsonFeatureCollectionAsALayer } from "../utils";
import { FeatureCollection } from "../types.ts";

describe("test file read", () => {
    test("test readGeoJsonFeatureCollectionAsALayer", () => {
        expect(() => readGeoJsonFeatureCollectionAsALayer(ErrorData as any as FeatureCollection)).toThrowError(/^无法视作一个图层$/);
    });
});