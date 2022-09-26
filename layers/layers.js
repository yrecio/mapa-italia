var wms_layers = [];

var format_MS5_0 = new ol.format.GeoJSON();
var features_MS5_0 = format_MS5_0.readFeatures(json_MS5_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MS5_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MS5_0.addFeatures(features_MS5_0);
var lyr_MS5_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MS5_0, 
                style: style_MS5_0,
                interactive: true,
    title: 'MS5<br />\
    <img src="styles/legend/MS5_0_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/MS5_0_1.png" /> 15 - 30<br />\
    <img src="styles/legend/MS5_0_2.png" /> 30 - 45<br />\
    <img src="styles/legend/MS5_0_3.png" /> 45 - 60<br />'
        });
var format_centroizquierda_1 = new ol.format.GeoJSON();
var features_centroizquierda_1 = format_centroizquierda_1.readFeatures(json_centroizquierda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroizquierda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroizquierda_1.addFeatures(features_centroizquierda_1);
var lyr_centroizquierda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroizquierda_1, 
                style: style_centroizquierda_1,
                interactive: true,
    title: 'centro-izquierda<br />\
    <img src="styles/legend/centroizquierda_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/centroizquierda_1_1.png" /> 15 - 30<br />\
    <img src="styles/legend/centroizquierda_1_2.png" /> 30 - 45<br />\
    <img src="styles/legend/centroizquierda_1_3.png" /> 45 - 60<br />'
        });
var format_centroderecha_2 = new ol.format.GeoJSON();
var features_centroderecha_2 = format_centroderecha_2.readFeatures(json_centroderecha_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroderecha_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroderecha_2.addFeatures(features_centroderecha_2);
var lyr_centroderecha_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroderecha_2, 
                style: style_centroderecha_2,
                interactive: true,
    title: 'centroderecha<br />\
    <img src="styles/legend/centroderecha_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/centroderecha_2_1.png" /> 15 - 30<br />\
    <img src="styles/legend/centroderecha_2_2.png" /> 30 - 45<br />\
    <img src="styles/legend/centroderecha_2_3.png" /> 45 - 60<br />'
        });

lyr_MS5_0.setVisible(false);lyr_centroizquierda_1.setVisible(false);lyr_centroderecha_2.setVisible(true);
var layersList = [lyr_MS5_0,lyr_centroizquierda_1,lyr_centroderecha_2];
lyr_MS5_0.set('fieldAliases', {'CIRCO17_D': 'Región: ', 'Centro-der': 'Centro-der', 'Centro-iz': 'Centro-iz', 'MS5': 'Porcentaje de voto (%): ', 'Ganador_22': 'Ganador_22', 'Ganador_18': 'Ganador_18', });
lyr_centroizquierda_1.set('fieldAliases', {'CIRCO17_D': 'Región: ', 'Centro-der': 'Centro-der', 'Centro-iz': 'Porcentaje de voto (%): ', 'MS5': 'MS5', 'Ganador_22': 'Ganador_22', 'Ganador_18': 'Ganador_18', });
lyr_centroderecha_2.set('fieldAliases', {'CIRCO17_D': 'Región: ', 'Centro-der': 'Porcentaje de voto (%): ', 'Centro-iz': 'Centro-iz', 'MS5': 'MS5', 'Ganador_22': 'Ganador_22', 'Ganador_18': 'Ganador_18', });
lyr_MS5_0.set('fieldImages', {'CIRCO17_D': 'TextEdit', 'Centro-der': 'Hidden', 'Centro-iz': 'Hidden', 'MS5': 'TextEdit', 'Ganador_22': 'Hidden', 'Ganador_18': 'Hidden', });
lyr_centroizquierda_1.set('fieldImages', {'CIRCO17_D': 'TextEdit', 'Centro-der': 'Hidden', 'Centro-iz': 'TextEdit', 'MS5': 'Hidden', 'Ganador_22': 'Hidden', 'Ganador_18': 'Hidden', });
lyr_centroderecha_2.set('fieldImages', {'CIRCO17_D': 'TextEdit', 'Centro-der': 'TextEdit', 'Centro-iz': 'Hidden', 'MS5': 'Hidden', 'Ganador_22': 'Hidden', 'Ganador_18': 'Hidden', });
lyr_MS5_0.set('fieldLabels', {'CIRCO17_D': 'header label', 'MS5': 'header label', });
lyr_centroizquierda_1.set('fieldLabels', {'CIRCO17_D': 'header label', 'Centro-iz': 'header label', });
lyr_centroderecha_2.set('fieldLabels', {'CIRCO17_D': 'header label', 'Centro-der': 'header label', });
lyr_centroderecha_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});