import sinityclient from "@sanity/client";
import imageurlbuilder from "@sanity/image-url";

export const client = sinityclient({
  projectId: "psgoniyc",
  dataset: "production",
  apiVersion: "2022-02-24",
  useCdn: "true",
  token:
    "skt5wEOXaDAPtm5LxbCXnsSyjIzsVCL9uivJssgiQaoeMAuVNz2iqckfXtshZ0XSzXAcVwONSJi5CE3VXFmxCHdp94YGOHTFTKyajdiEFFvuaaC59BTXgA4u3sXfUnIbHTiRWbc1JTZpj0rPslRhlqAQ8DWrRk1pRZFqCnQ6dfWWHNDaC29v",
});
const builder = imageurlbuilder(client);
export const urlfor = (source) => builder.image(source);
