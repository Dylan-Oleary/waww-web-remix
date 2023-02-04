import { TmdbGetWatchProvidersResponse, TmdbWatchProvider } from "@/schema";

export const mockProviders: TmdbWatchProvider[] = [
    {
        display_priority: 64,
        logo_path: "https://www.themoviedb.org/t/p/original/pheENW1BxlexXX1CKJ4GyWudyMA.jpg",
        provider_name: "Shudder",
        provider_id: 99
    },
    {
        display_priority: 64,
        logo_path: "https://www.themoviedb.org/t/p/original/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
        provider_name: "Apple TV Plus",
        provider_id: 350
    },
    {
        display_priority: 64,
        logo_path: "https://www.themoviedb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
        provider_name: "Netflix",
        provider_id: 8
    }
];

export const mockGetWatchProvidersResponse: TmdbGetWatchProvidersResponse = {
    results: mockProviders
};
