ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([612232.002927, 9050117.009945, 763565.672140, 9168201.278491]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasiKabupatenMalang_1 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupatenMalang_1 = format_BatasAdministrasiKabupatenMalang_1.readFeatures(json_BatasAdministrasiKabupatenMalang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasAdministrasiKabupatenMalang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupatenMalang_1.addFeatures(features_BatasAdministrasiKabupatenMalang_1);
var lyr_BatasAdministrasiKabupatenMalang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupatenMalang_1, 
                style: style_BatasAdministrasiKabupatenMalang_1,
                popuplayertitle: 'Batas Administrasi Kabupaten Malang',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKabupatenMalang_1.png" /> Batas Administrasi Kabupaten Malang'
            });
var format_KelasKesesuaianLahanPermukiman_2 = new ol.format.GeoJSON();
var features_KelasKesesuaianLahanPermukiman_2 = format_KelasKesesuaianLahanPermukiman_2.readFeatures(json_KelasKesesuaianLahanPermukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KelasKesesuaianLahanPermukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelasKesesuaianLahanPermukiman_2.addFeatures(features_KelasKesesuaianLahanPermukiman_2);
var lyr_KelasKesesuaianLahanPermukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelasKesesuaianLahanPermukiman_2, 
                style: style_KelasKesesuaianLahanPermukiman_2,
                popuplayertitle: 'Kelas Kesesuaian Lahan Permukiman',
                interactive: true,
    title: 'Kelas Kesesuaian Lahan Permukiman<br />\
    <img src="styles/legend/KelasKesesuaianLahanPermukiman_2_0.png" /> Sangat Sesuai<br />\
    <img src="styles/legend/KelasKesesuaianLahanPermukiman_2_1.png" /> Sesuai<br />\
    <img src="styles/legend/KelasKesesuaianLahanPermukiman_2_2.png" /> Cukup sesuai<br />\
    <img src="styles/legend/KelasKesesuaianLahanPermukiman_2_3.png" /> Kurang sesuai<br />\
    <img src="styles/legend/KelasKesesuaianLahanPermukiman_2_4.png" /> Tidak sesuai<br />' });
var format_Places_3 = new ol.format.GeoJSON();
var features_Places_3 = format_Places_3.readFeatures(json_Places_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Places_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_3.addFeatures(features_Places_3);
var lyr_Places_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_3, 
                style: style_Places_3,
                popuplayertitle: 'Places',
                interactive: false,
                title: 'Places'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasAdministrasiKabupatenMalang_1.setVisible(true);lyr_KelasKesesuaianLahanPermukiman_2.setVisible(true);lyr_Places_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasAdministrasiKabupatenMalang_1,lyr_KelasKesesuaianLahanPermukiman_2,lyr_Places_3];
lyr_BatasAdministrasiKabupatenMalang_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KelasKesesuaianLahanPermukiman_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kelas': 'Nama Lokasi', 'Foto': 'Contoh Foto Lokasi', 'Foto2': 'Contoh Foto Lokasi', 'Nama Lokas': 'Nama Lokas', });
lyr_Places_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'place': 'place', 'name': 'name', });
lyr_BatasAdministrasiKabupatenMalang_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KelasKesesuaianLahanPermukiman_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Kelas': 'TextEdit', 'Foto': 'ExternalResource', 'Foto2': 'ExternalResource', 'Nama Lokas': 'TextEdit', });
lyr_Places_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'place': 'TextEdit', 'name': 'TextEdit', });
lyr_BatasAdministrasiKabupatenMalang_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_KelasKesesuaianLahanPermukiman_2.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'Kelas': 'header label - visible with data', 'Foto': 'inline label - visible with data', 'Foto2': 'inline label - visible with data', 'Nama Lokas': 'inline label - visible with data', });
lyr_Places_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'place': 'no label', 'name': 'no label', });
lyr_Places_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});