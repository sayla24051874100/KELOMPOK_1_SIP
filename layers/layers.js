var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdministrasiKelurahanKotaKediri_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKelurahanKotaKediri_1 = format_BatasAdministrasiKelurahanKotaKediri_1.readFeatures(json_BatasAdministrasiKelurahanKotaKediri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKelurahanKotaKediri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKelurahanKotaKediri_1.addFeatures(features_BatasAdministrasiKelurahanKotaKediri_1);
var lyr_BatasAdministrasiKelurahanKotaKediri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKelurahanKotaKediri_1, 
                style: style_BatasAdministrasiKelurahanKotaKediri_1,
                popuplayertitle: 'Batas Administrasi Kelurahan Kota Kediri',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKelurahanKotaKediri_1.png" /> Batas Administrasi Kelurahan Kota Kediri'
            });
var format_LahanPertanianKotaKediri2020_2 = new ol.format.GeoJSON();
var features_LahanPertanianKotaKediri2020_2 = format_LahanPertanianKotaKediri2020_2.readFeatures(json_LahanPertanianKotaKediri2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanPertanianKotaKediri2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanPertanianKotaKediri2020_2.addFeatures(features_LahanPertanianKotaKediri2020_2);
var lyr_LahanPertanianKotaKediri2020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanPertanianKotaKediri2020_2, 
                style: style_LahanPertanianKotaKediri2020_2,
                popuplayertitle: 'Lahan Pertanian Kota Kediri 2020',
                interactive: true,
                title: '<img src="styles/legend/LahanPertanianKotaKediri2020_2.png" /> Lahan Pertanian Kota Kediri 2020'
            });
var format_LahanPertanianKotaKediri2025_3 = new ol.format.GeoJSON();
var features_LahanPertanianKotaKediri2025_3 = format_LahanPertanianKotaKediri2025_3.readFeatures(json_LahanPertanianKotaKediri2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanPertanianKotaKediri2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanPertanianKotaKediri2025_3.addFeatures(features_LahanPertanianKotaKediri2025_3);
var lyr_LahanPertanianKotaKediri2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanPertanianKotaKediri2025_3, 
                style: style_LahanPertanianKotaKediri2025_3,
                popuplayertitle: 'Lahan Pertanian Kota Kediri 2025',
                interactive: true,
                title: '<img src="styles/legend/LahanPertanianKotaKediri2025_3.png" /> Lahan Pertanian Kota Kediri 2025'
            });
var format_PermukimanKotaKediri2020_4 = new ol.format.GeoJSON();
var features_PermukimanKotaKediri2020_4 = format_PermukimanKotaKediri2020_4.readFeatures(json_PermukimanKotaKediri2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanKotaKediri2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanKotaKediri2020_4.addFeatures(features_PermukimanKotaKediri2020_4);
var lyr_PermukimanKotaKediri2020_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanKotaKediri2020_4, 
                style: style_PermukimanKotaKediri2020_4,
                popuplayertitle: 'Permukiman Kota Kediri 2020',
                interactive: true,
                title: '<img src="styles/legend/PermukimanKotaKediri2020_4.png" /> Permukiman Kota Kediri 2020'
            });
var format_PermukimanKotaKediri2025_5 = new ol.format.GeoJSON();
var features_PermukimanKotaKediri2025_5 = format_PermukimanKotaKediri2025_5.readFeatures(json_PermukimanKotaKediri2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PermukimanKotaKediri2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermukimanKotaKediri2025_5.addFeatures(features_PermukimanKotaKediri2025_5);
var lyr_PermukimanKotaKediri2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermukimanKotaKediri2025_5, 
                style: style_PermukimanKotaKediri2025_5,
                popuplayertitle: 'Permukiman Kota Kediri 2025',
                interactive: true,
                title: '<img src="styles/legend/PermukimanKotaKediri2025_5.png" /> Permukiman Kota Kediri 2025'
            });
var format_Jalan_KotaKediri_6 = new ol.format.GeoJSON();
var features_Jalan_KotaKediri_6 = format_Jalan_KotaKediri_6.readFeatures(json_Jalan_KotaKediri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_KotaKediri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_KotaKediri_6.addFeatures(features_Jalan_KotaKediri_6);
var lyr_Jalan_KotaKediri_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_KotaKediri_6, 
                style: style_Jalan_KotaKediri_6,
                popuplayertitle: 'Jalan_KotaKediri',
                interactive: true,
    title: 'Jalan_KotaKediri<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_2.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_4.png" /> Jalan Nasional<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_5.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_KotaKediri_6_6.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasAdministrasiKelurahanKotaKediri_1.setVisible(true);lyr_LahanPertanianKotaKediri2020_2.setVisible(true);lyr_LahanPertanianKotaKediri2025_3.setVisible(true);lyr_PermukimanKotaKediri2020_4.setVisible(true);lyr_PermukimanKotaKediri2025_5.setVisible(true);lyr_Jalan_KotaKediri_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasAdministrasiKelurahanKotaKediri_1,lyr_LahanPertanianKotaKediri2020_2,lyr_LahanPertanianKotaKediri2025_3,lyr_PermukimanKotaKediri2020_4,lyr_PermukimanKotaKediri2025_5,lyr_Jalan_KotaKediri_6];
lyr_BatasAdministrasiKelurahanKotaKediri_1.set('fieldAliases', {'FID_Admin_': 'FID_Admin_', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'FID_Batas_': 'FID_Batas_', 'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ_1': 'NAMOBJ_1', 'FCODE_1': 'FCODE_1', 'REMARK_1': 'REMARK_1', 'METADATA_1': 'METADATA_1', 'SRS_ID_1': 'SRS_ID_1', 'KDBBPS_1': 'KDBBPS_1', 'KDCBPS_1': 'KDCBPS_1', 'KDCPUM_1': 'KDCPUM_1', 'KDEBPS_1': 'KDEBPS_1', 'KDEPUM_1': 'KDEPUM_1', 'KDPBPS_1': 'KDPBPS_1', 'KDPKAB_1': 'KDPKAB_1', 'KDPPUM_1': 'KDPPUM_1', 'LUASWH_1': 'LUASWH_1', 'TIPADM_1': 'TIPADM_1', 'WADMKC_1': 'WADMKC_1', 'WADMKD_1': 'WADMKD_1', 'WADMKK_1': 'WADMKK_1', 'WADMPR_1': 'WADMPR_1', 'WIADKC_1': 'WIADKC_1', 'WIADKK_1': 'WIADKK_1', 'WIADPR_1': 'WIADPR_1', 'WIADKD_1': 'WIADKD_1', 'SHAPE_Le_1': 'SHAPE_Le_1', 'SHAPE_Ar_1': 'SHAPE_Ar_1', });
lyr_LahanPertanianKotaKediri2020_2.set('fieldAliases', {'gridcode': 'gridcode', 'TL': 'TL', 'Luas_Ha': 'Luas_Ha', });
lyr_LahanPertanianKotaKediri2025_3.set('fieldAliases', {'gridcode': 'gridcode', 'TL': 'TL', 'Luas_Ha': 'Luas_Ha', });
lyr_PermukimanKotaKediri2020_4.set('fieldAliases', {'gridcode': 'gridcode', 'TL': 'TL', 'Luas_Ha': 'Luas_Ha', });
lyr_PermukimanKotaKediri2025_5.set('fieldAliases', {'gridcode': 'gridcode', 'TL': 'TL', 'Luas_Ha': 'Luas_Ha', });
lyr_Jalan_KotaKediri_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasAdministrasiKelurahanKotaKediri_1.set('fieldImages', {'FID_Admin_': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'KDBBPS': 'Hidden', 'KDCBPS': 'Hidden', 'KDCPUM': 'Hidden', 'KDEBPS': 'Hidden', 'KDEPUM': 'Hidden', 'KDPBPS': 'Hidden', 'KDPKAB': 'Hidden', 'KDPPUM': 'Hidden', 'LUASWH': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'WIADKC': 'Hidden', 'WIADKK': 'Hidden', 'WIADPR': 'Hidden', 'WIADKD': 'Hidden', 'UUPP': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'FID_Batas_': 'Hidden', 'OBJECTID_1': 'Hidden', 'NAMOBJ_1': 'Hidden', 'FCODE_1': 'Hidden', 'REMARK_1': 'Hidden', 'METADATA_1': 'Hidden', 'SRS_ID_1': 'Hidden', 'KDBBPS_1': 'Hidden', 'KDCBPS_1': 'Hidden', 'KDCPUM_1': 'Hidden', 'KDEBPS_1': 'Hidden', 'KDEPUM_1': 'Hidden', 'KDPBPS_1': 'Hidden', 'KDPKAB_1': 'Hidden', 'KDPPUM_1': 'Hidden', 'LUASWH_1': 'Hidden', 'TIPADM_1': 'Hidden', 'WADMKC_1': 'Hidden', 'WADMKD_1': 'Hidden', 'WADMKK_1': 'Hidden', 'WADMPR_1': 'Hidden', 'WIADKC_1': 'Hidden', 'WIADKK_1': 'Hidden', 'WIADPR_1': 'Hidden', 'WIADKD_1': 'Hidden', 'SHAPE_Le_1': 'Hidden', 'SHAPE_Ar_1': 'Hidden', });
lyr_LahanPertanianKotaKediri2020_2.set('fieldImages', {'gridcode': 'TextEdit', 'TL': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_LahanPertanianKotaKediri2025_3.set('fieldImages', {'gridcode': 'TextEdit', 'TL': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_PermukimanKotaKediri2020_4.set('fieldImages', {'gridcode': 'TextEdit', 'TL': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_PermukimanKotaKediri2025_5.set('fieldImages', {'gridcode': 'TextEdit', 'TL': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_Jalan_KotaKediri_6.set('fieldImages', {'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'TextEdit', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'ARHRJL': 'Hidden', 'AUTRJL': 'Hidden', 'FGSRJL': 'Hidden', 'JARRJL': 'Hidden', 'JPARJL': 'Hidden', 'KLLRJL': 'Hidden', 'KONRJL': 'Hidden', 'KPMSTR': 'Hidden', 'LKONOF': 'Hidden', 'LKSBSP': 'Hidden', 'LKSRTA': 'Hidden', 'LLHRRT': 'Hidden', 'LOCRJL': 'Hidden', 'LBRBHJ': 'Hidden', 'LBRJLN': 'Hidden', 'MATRJL': 'Hidden', 'MEDRJL': 'Hidden', 'SPCRJL': 'Hidden', 'STARJL': 'Hidden', 'TOLRJL': 'Hidden', 'UTKRJL': 'Hidden', 'VLCPRT': 'Hidden', 'WLYRJL': 'Hidden', 'TGL_SK': 'DateTime', 'JLNLYG': 'Hidden', 'KLSRJL': 'Hidden', 'SHAPE_Leng': 'Hidden', });
lyr_BatasAdministrasiKelurahanKotaKediri_1.set('fieldLabels', {'NAMOBJ': 'no label', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', });
lyr_LahanPertanianKotaKediri2020_2.set('fieldLabels', {'gridcode': 'no label', 'TL': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_LahanPertanianKotaKediri2025_3.set('fieldLabels', {'gridcode': 'no label', 'TL': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_PermukimanKotaKediri2020_4.set('fieldLabels', {'gridcode': 'no label', 'TL': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_PermukimanKotaKediri2025_5.set('fieldLabels', {'gridcode': 'no label', 'TL': 'inline label - always visible', 'Luas_Ha': 'inline label - always visible', });
lyr_Jalan_KotaKediri_6.set('fieldLabels', {'REMARK': 'inline label - always visible', 'TGL_SK': 'no label', });
lyr_Jalan_KotaKediri_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});