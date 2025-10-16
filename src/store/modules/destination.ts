import { defineStore } from "pinia";
import type { Destination } from "@/types/destination";

interface State {
  destinations: Destination[];
  loading: boolean;
  error: string | null;
  filters: {
    region: string;
    theme: string;
    priceRange: [number, number] | null;
    duration: [number, number] | null;
  };
}

export const useDestinationStore = defineStore("destination", {
  state: (): State => ({
    destinations: [],
    loading: false,
    error: null,
    filters: {
      region: "",
      theme: "",
      priceRange: null,
      duration: null,
    },
  }),

  getters: {
    filteredDestinations: (state) => {
      let filtered = [...state.destinations];

      if (state.filters.region) {
        filtered = filtered.filter(
          (d) => d.location.country === state.filters.region
        );
      }

      if (state.filters.theme) {
        filtered = filtered.filter((d) => d.tags.includes(state.filters.theme));
      }

      if (state.filters.priceRange) {
        filtered = filtered.filter((d) => {
          const [min, max] = state.filters.priceRange!;
          return d.pricing.basePrice >= min && d.pricing.basePrice <= max;
        });
      }

      return filtered;
    },
    
    getDestinationById: (state) => {
      return (id: string) => state.destinations.find((d) => d.id === id);
    },
  },

  actions: {
    async fetchDestinations() {
      this.loading = true;
      try {
        // TODO: Replace with actual API call
        const mockDestinations: Destination[] = [
          {
            id: "1",
            name: "巴厘岛",
            description:
              "印度尼西亚著名的度假胜地，拥有美丽的海滩和丰富的文化遗产。",
            location: {
              country: "印度尼西亚",
              city: "巴厘岛",
              coordinates: {
                latitude: -8.4095,
                longitude: 115.1889,
              },
            },
            images: {
              main: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
              gallery: [],
            },
            pricing: {
              basePrice: 3999,
              currency: "CNY",
            },
            rating: {
              average: 4.8,
              count: 385,
            },
            tags: ["海滩", "文化", "度假"],
            features: ["私人海滩", "水疗中心", "潜水"],
          },
          {
            id: "2",
            name: "北海道",
            description: "日本最北端的岛屿，以其粉雪、温泉和美食闻名于世。",
            location: {
              country: "日本",
              city: "札幌",
              coordinates: {
                latitude: 43.0618,
                longitude: 141.3545,
              },
            },
            images: {
              main: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
              gallery: [],
            },
            pricing: {
              basePrice: 4599,
              currency: "CNY",
            },
            rating: {
              average: 4.7,
              count: 425,
            },
            tags: ["滑雪", "温泉", "美食"],
            features: ["温泉", "滑雪场", "海鲜市场"],
          },
        ];

        this.destinations = mockDestinations;
      } catch (error) {
        this.error = error instanceof Error ? error.message : "加载目的地失败";
      } finally {
        this.loading = false;
      }
    },

    setFilter(key: keyof State["filters"], value: any) {
      this.filters[key] = value;
    },

    clearFilters() {
      this.filters = {
        region: "",
        theme: "",
        priceRange: null,
        duration: null,
      };
    },
  },
});
