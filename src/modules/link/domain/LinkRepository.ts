import { Link } from "./Link";

export default interface LinkRepository {
  findAll: () => Link[];
}
