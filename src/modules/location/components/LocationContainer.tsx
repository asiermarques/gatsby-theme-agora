import * as React from "react";
import Location from "./Location";
import LocationRepository from "../domain/LocationRepository";
import { useLocationRepository } from "../../../hooks/use-repository";

export default ({ repository }: { repository?: LocationRepository }) => {
  const location = (
    repository ? repository : useLocationRepository()
  ).getConfiguredLocation();
  return <Location location={location} />;
};
