import { defineStore } from "pinia";

interface Destination {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

interface State {
  destinations: Destination[];
  loading: boolean;
  error: string | null;
}

export const useDestinationStore = defineStore("destination", {
  state: (): State => ({
    destinations: [],
    loading: false,
    error: null,
  }),

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
            price: 3999,
            image:
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
            rating: 4.8,
          },
          {
            id: "2",
            name: "札幌",
            description: "日本北海道的中心城市，以雪季和美食闻名于世。",
            price: 4599,
            image:
              "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
            rating: 4.7,
          },
        ];
        this.destinations = mockDestinations;
      } catch (error) {
        this.error = error instanceof Error ? error.message : "加载目的地失败";
      } finally {
        this.loading = false;
      }
    },
  },
});
