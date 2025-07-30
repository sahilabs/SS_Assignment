// 1. Define your location and 10 km buffer
var lat = 23;
var lon = 79;
var point = ee.Geometry.Point(lon, lat);
var region = point.buffer(10000);//10km
Map.setCenter(lon, lat, 8);
Map.addLayer(region, {color: 'red'}, '3km Circle');

var regions = [
  { state: 'MP',name: 'chholya', lat : 24.42908338165825,lon: 77.05902663411227},
  {state: 'MP',name: 'kalyanpur'  ,lat:23.15610753331013, lon: 77.23477569946427},
  {state: 'MP',name:'ankia', lat: 22.625984859389657, lon: 77.71164108563148},
  {state: 'MH',name:'mundhewadi', lat: 17.510007749617625, lon: 75.55681347592001 },
  {state: 'MH',name:'tadklas', lat: 19.174674898859394, lon: 76.89074090670208 },
  {state: 'MH',name:'jethabhawda', lat: 20.986552756435465, lon: 80.32117403029933}
  
  ];


var buffer_km = 3;  // you can change this if needed
var buffer_m = buffer_km * 1000;

var allStats = [];  // to hold all region-wise stats

regions.forEach(function(regionInfo) {
  
  var point = ee.Geometry.Point(regionInfo.lon, regionInfo.lat);
  var region = point.buffer(buffer_m);
  
  Map.addLayer(region, {color: 'red'}, regionInfo.name);
  

  // 2. Load MODIS NDVI collection
  var extracedCol =ee.ImageCollection("MODIS/061/MOD11A1")
                  .filterBounds(region)
                  .filterDate('2008-10-01', '2024-11-01')  // adjust as needed
                  // .filterDate('2024-10-01', '2024-11-01')  // adjust as needed
                  .select(['LST_Day_1km',
                            'QC_Day',
                            'LST_Night_1km',
                            'QC_Night'
                            ]
                           );

  // 3. calculateStats
  
  var withStats = extracedCol.map(function(img) {
    var stats = img.reduceRegion({
      reducer: ee.Reducer.mean()
                .combine(ee.Reducer.min(), '', true)
                .combine(ee.Reducer.max(), '', true)
                .combine(ee.Reducer.stdDev(), '', true),
      geometry: region,
      scale: 11132,
      maxPixels: 1e13
    });
    return ee.Feature(null, stats).set('date', img.date().format('YYYY-MM-dd'))
           .set('state', regionInfo.state)
           .set('region', regionInfo.name)
           .set('buffer_km', buffer_km);
     });
    // Add to list
    allStats.push(withStats);
    });
    
    

// 4. Merge all into one FeatureCollection
var mergedStats = ee.FeatureCollection(allStats).flatten();

// 5. Print to console
// print('All stats for regions:', mergedStats);


Export.table.toDrive({
fileNamePrefix: 'MODIS11A1',
  collection: mergedStats,
  description: 'MODIS11A1_Timeseries',
  fileFormat: 'CSV'
});


