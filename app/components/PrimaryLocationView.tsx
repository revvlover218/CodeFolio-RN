import { Alert, Platform, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";

import HeadingView from "./HeadingView";
import Localize from "../utils/Localize";
import ReusableStyles from "../utils/ReusableStyles";
import RoundedView from "./RoundedView";
import UserLocationView from "./UserLocationView";
import ActionButton from "./ActionButton";
import SubtitledView from "./SubtitledView";

const PrimaryLocationView = () => {
  interface Region {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }

  interface Coordinates {
    latitude: number;
    longitude: number;
  }

  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] = useState<Region | null>(null);
  const [userMarker, setUserMarker] = useState<Coordinates | null>(null);
  const [reverseGeoCodedLocation, setReverseGeoCodedLocation] = useState<
    string | null
  >(null);

  const region = {
    latitude: 37.334848505541174,
    longitude: -122.00897200278327,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0015,
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(region, 1000);
    }
  }, []);

  useEffect(() => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(userLocation, 1000);
    }
  }, [userLocation]);

  const buildUserLocationButton = () => {
    if (Platform.OS === "ios") {
      return <UserLocationView locationButtonPressed={userLocationAction} />;
    } else if (Platform.OS === "android") {
      return (
        <ActionButton
          text={Localize.userLocationTitle}
          onPress={userLocationAction}
        ></ActionButton>
      );
    }
    return;
  };

  const userLocationAction = async () => {
    const hasPermission = await requestLocationPermissionAction();
    if (!hasPermission) {
      Alert.alert(Localize.error, Localize.locationPermissionErrorMessage);
    }

    const currentUserLocation = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = currentUserLocation.coords;

    setUserLocation({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.0015,
    });

    setUserMarker({ latitude: latitude, longitude: longitude });

    const reversedGeolocation = await Location.reverseGeocodeAsync({
      latitude: latitude,
      longitude: longitude,
    });
    const { country, region } = reversedGeolocation[0];
    setReverseGeoCodedLocation(`I am based in ${region}, ${country}`);
  };

  const requestLocationPermissionAction = async () => {
    let { status: currentPermission } =
      await Location.getForegroundPermissionsAsync();
    if (currentPermission !== "granted") {
      const { status: newPermission } =
        await Location.requestForegroundPermissionsAsync();
      if (newPermission !== "granted") {
        Alert.alert(
          Localize.permissionRequiredTitle,
          Localize.locationPermissionRequiredDescription,
          [{ text: Localize.ok }]
        );
        return false;
      }
    }
    return true;
  };

  return (
    <View style={ReusableStyles.containerView}>
      <HeadingView text={Localize.mapViewTitle} />
      <RoundedView style={styles.roundedView}>
        <View style={styles.containerMapView}>
          <MapView ref={mapRef} style={styles.mapView} initialRegion={region}>
            {userMarker && <Marker coordinate={userMarker}></Marker>}
          </MapView>
        </View>
      </RoundedView>
      {reverseGeoCodedLocation && (
        <SubtitledView text={reverseGeoCodedLocation}></SubtitledView>
      )}
      {buildUserLocationButton()}
    </View>
  );
};

export default PrimaryLocationView;

const styles = StyleSheet.create({
  containerMapView: {
    height: 200,
    borderRadius: 10,
    flex: 1,
  },
  roundedView: {
    marginBottom: 10,
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
