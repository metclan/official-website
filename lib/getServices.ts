import { Service } from "./mongo/models";
export async function getServices() {
  const services = await Service.find();
  console.log(services);
}
