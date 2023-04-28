import { Speaker } from "../../speaker/domain/Speaker";

export type Talk = {
  title: string;
  description: string;
  speakers?: Speaker[];
};
