# Assignment
## Datasets

This project utilizes a combination of remote sensing and reanalysis datasets to analyze and model environmental and agricultural conditions. Below are the datasets and the specific variables extracted from each source:

### MODIS/061/MOD13A1 – MODIS Vegetation Indices (16-day, 500m)

Used for vegetation monitoring and plant health assessment.

Variables:

    NDVI: Normalized Difference Vegetation Index (scale: 0.0001)

    EVI: Enhanced Vegetation Index (scale: 0.0001)

    DetailedQA: Quality indicators for vegetation indices

    sur_refl_b01: Red surface reflectance (645nm)

    sur_refl_b02: Near-Infrared (NIR) surface reflectance (645nm)

    sur_refl_b03: Blue surface reflectance (645nm)

    sur_refl_b07: Mid-Infrared (MIR) surface reflectance (2130nm)

    SummaryQA: Reliability of VI pixel

### MODIS/061/MOD11A1 – MODIS Land Surface Temperature (Daily, 1km)

Used for capturing land surface temperature variations.

Variables:

    LST_Day_1km: Daytime Land Surface Temperature (scale: 0.02 K)

    QC_Day: Daytime quality indicators

    LST_Night_1km: Nighttime Land Surface Temperature (scale: 0.02 K)

    QC_Night: Nighttime quality indicators
    
### ECMWF/ERA5_LAND/HOURLY – ERA5-Land Hourly Reanalysis

Used to understand land-atmosphere interactions, including temperature, humidity, and soil conditions.

Variables:

    temperature_2m: Air temperature at 2m above ground (K)

    dewpoint_temperature_2m: Dew point at 2m (K), an indicator of atmospheric moisture

    surface_pressure: Surface atmospheric pressure (Pa)

    skin_temperature: Earth's surface temperature (K)

    soil_temperature_level_1: Soil temperature at 0–7 cm (K)

    soil_temperature_level_2: Soil temperature at 7–28 cm (K)

    soil_temperature_level_3: Soil temperature at 28–100 cm (K)

    soil_temperature_level_4: Soil temperature at 100–289 cm (K)

    volumetric_soil_water_layer_1: Volume of water in soil (0–7 cm)

    volumetric_soil_water_layer_2: Volume of water in soil (7–28 cm)

    volumetric_soil_water_layer_3: Volume of water in soil (28–100 cm)

    volumetric_soil_water_layer_4: Volume of water in soil (100–289 cm)

    Note: The volumetric_soil_water_layer_* variables represent the volume fraction of water present in each soil layer and are crucial for assessing soil moisture availability and plant water stress.

### UCSB-CHG/CHIRPS/PENTAD – CHIRPS Precipitation (5-day average)

Used for monitoring rainfall trends and drought conditions.

Variable:

    precipitation: Rainfall (mm per 5-day pentad)
