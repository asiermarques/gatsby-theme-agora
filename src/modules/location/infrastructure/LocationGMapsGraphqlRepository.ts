import { Location } from "../domain/Location";
import LocationRepository from "../domain/LocationRepository";
import { useConfig } from "../../../hooks/use-config";

export default class LocationGMapsGraphqlRepository
  implements LocationRepository
{
  getConfiguredLocation(): Location {
    const config = useConfig();
    return config.location;
  }
}
