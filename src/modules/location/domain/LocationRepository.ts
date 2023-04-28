import { Location } from "./Location";

export default interface LocationRepository {
  getConfiguredLocation: () => Location;
}
