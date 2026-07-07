import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { countries } from "@/data/countries";

export const dynamic = "force-static";

const BASE_URL = "https://aflyconsultancy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/countries", "/about", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const countryPages = countries.map((country) => ({
    url: `${BASE_URL}/countries/${country.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...countryPages];
}
