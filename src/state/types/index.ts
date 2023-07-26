export type UnsplashImage = {
    id: string;
    urls: {
        small: string;
        full: string;
    }
    user: {
        first_name: string;
        last_name: string;
    }
    likes: number;
}

export type UnsplashState = {
    images: UnsplashImage[];
    loading: boolean;
    error: string | null;
}

export type UnsplashSearchResponse = {
    total: number;
    total_pages: number;
    results: UnsplashImage[];
  };