var size = 0;
var placement = 'point';
function categories_Jalan_KotaKediri_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Jalan Kolektor':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,123,120,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jalan Lain':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,212,168,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jalan Lingkungan':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(139,206,119,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jalan Lokal':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(216,25,181,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jalan Nasional':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,130,216,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Jalan Setapak':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(118,69,224,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(225,205,54,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 0.0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Jalan_KotaKediri_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("REMARK");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Jalan_KotaKediri_6(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
