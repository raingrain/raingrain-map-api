import { Circle, Polygon as GPolygon, Polyline } from "@antv/g";
import {
    LineStringFeature,
    LineStringLayer,
    MultiLineStringFeature,
    MultiLineStringLayer,
    MultiPointFeature,
    MultiPointLayer,
    MultiPolygonFeature,
    MultiPolygonLayer,
    PointFeature,
    PointLayer,
    PolygonFeature,
    PolygonLayer
} from "./core";

type Position = [x: number, y: number];

type BBox = [minX: number, minY: number, maxX: number, maxY: number];

type GeoJsonProperties =
    {
        [name: string]: any
    };

type PointFeatureDisplayObject = Circle;

type MultiPointFeatureDisplayObject = Circle[];

type LineStringFeatureDisplayObject = Polyline;

type MultiLineStringFeatureDisplayObject = Polyline[];

type PolygonFeatureDisplayObject = GPolygon;

type MultiPolygonFeatureDisplayObject = GPolygon[]

type DisplayObjectUnion = PointFeatureDisplayObject | LineStringFeatureDisplayObject | PolygonFeatureDisplayObject

type DisplayObjectArrayUnion =
    MultiPointFeatureDisplayObject
    | MultiLineStringFeatureDisplayObject
    | MultiPolygonFeatureDisplayObject

type FeatureDisplayObjectUnion = DisplayObjectUnion | DisplayObjectArrayUnion

//  | GeometryCollection
type Geometry = Point | MultiPoint | LineString | MultiLineString | Polygon | MultiPolygon;

type GeoJsonGeometryTypes = Geometry["type"];

type GeometryObject = Geometry;

type GeoJSON = Geometry | Feature | FeatureCollection;

type GeoJsonTypes = GeoJSON["type"];

type FeatureObjectUnion =
    PointFeature
    | MultiPointFeature
    | LineStringFeature
    | MultiLineStringFeature
    | PolygonFeature
    | MultiPolygonFeature

type FeatureObjectArrayUnion<F extends FeatureObjectUnion = FeatureObjectUnion> = F[]

type LayerObjectUnion =
    PointLayer
    | MultiPointLayer
    | LineStringLayer
    | MultiLineStringLayer
    | PolygonLayer
    | MultiPolygonLayer;

interface GeoJsonObject {
    type: GeoJsonTypes;
    bbox: BBox;
    coordinates: Position | Position[] | Position[][] | Position[][][];
}

interface Point extends GeoJsonObject {
    type: "Point";
    coordinates: Position;
}

interface MultiPoint extends GeoJsonObject {
    type: "MultiPoint";
    coordinates: Position[];
}

interface LineString extends GeoJsonObject {
    type: "LineString";
    coordinates: Position[];
}

interface MultiLineString extends GeoJsonObject {
    type: "MultiLineString";
    coordinates: Position[][];
}

interface Polygon extends GeoJsonObject {
    type: "Polygon";
    coordinates: Position[][];
}

interface MultiPolygon extends GeoJsonObject {
    type: "MultiPolygon";
    coordinates: Position[][][];
}

// interface GeometryCollection<G extends Geometry = Geometry> extends GeoJsonObject {
//     type: "GeometryCollection";
//     geometries: G[];
// }

interface Feature<G extends Geometry | null = Geometry, P = GeoJsonProperties> {
    type: "Feature";
    geometry: G;
    id?: string | number | undefined;
    properties: P;
    displayObject?: FeatureDisplayObjectUnion;
}

interface FeatureCollection<G extends Geometry | null = Geometry, P = GeoJsonProperties> {
    type: "FeatureCollection";
    // geometryType?: GeoJsonGeometryTypes;
    features: Array<Feature<G, P>>;
}

// interface FeatureCollections {
//     layers: FeatureCollection;
// }

interface LayerCollection {
    name: string;
    bbox: BBox;
    type: "LayerCollection";
    layers: FeatureCollection[];
}

type GRGeoJson = GeoJSON | LayerCollection

export type {
    Position,
    BBox,
    GeoJsonProperties,
    DisplayObjectUnion,
    DisplayObjectArrayUnion,
    PointFeatureDisplayObject,
    MultiPointFeatureDisplayObject,
    LineStringFeatureDisplayObject,
    MultiLineStringFeatureDisplayObject,
    PolygonFeatureDisplayObject,
    MultiPolygonFeatureDisplayObject,
    FeatureDisplayObjectUnion,
    // FeatureObject,
    FeatureObjectUnion,
    FeatureObjectArrayUnion,
    LayerObjectUnion,
    Geometry,
    GeoJsonGeometryTypes,
    GeometryObject,
    GeoJSON,
    GeoJsonTypes,
    GeoJsonObject,
    Point,
    MultiPoint,
    LineString,
    MultiLineString,
    Polygon,
    MultiPolygon,
    // GeometryCollection,
    Feature,
    FeatureCollection,
    LayerCollection,
    GRGeoJson
};