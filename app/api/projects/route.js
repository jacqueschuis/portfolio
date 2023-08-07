import { projects } from "@/data/data";

export async function GET(request) {
  return projects.JSON();
}
