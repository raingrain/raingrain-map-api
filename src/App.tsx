import China from "./assets/data/China.json";
// import ShangHai from "./assets/data/ShangHai.json";
import {
    createMapDocument,
    createMapWindow,
    destroyMapWindow,
    FeatureCollection,
    readGeoJsonFeatureCollectionAsALayer
} from "./map-engine";

export const App = () => {

    function handleClickCreate() {
        const mapDocument = createMapDocument();
        const layer = readGeoJsonFeatureCollectionAsALayer(China as any as FeatureCollection);
        layer.setName("China");
        mapDocument.addLayer(layer);
        createMapWindow({
            container: "container",
            width: 800,
            height: 600
        }, mapDocument);
        // downloadGeoJsonFile(createGeoJsonFeatureCollectionAsALayer(mapDocument.layers[0]), layer.name);
    }


    function handleClickDestroy() {
        destroyMapWindow();
    }

    return (
        <>
            <div id="container" style={{
                "border": "1px solid red"
            }}>
            </div>
            <button onClick={handleClickCreate}>create</button>
            <button onClick={handleClickDestroy}>destroy</button>
        </>
    );
};
