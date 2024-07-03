const APIKey = "AIzaSyAi0IIRUfp9YqeuXHDqccQZ5n1vQVgdNAU";

export const sortBook = (searchTerm: string, orderBy: string): string => {
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const queryParams = `?q=${searchTerm}&maxResults=20`;
  return baseUrl + queryParams;
};
