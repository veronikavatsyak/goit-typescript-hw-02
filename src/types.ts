export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
}
export interface ModalImage {
  url: string;
  alt: string;
}
export interface Response {
  results: Image[];
  total: number;
  total_pages: number;
}
