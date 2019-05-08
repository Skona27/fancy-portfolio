import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/jakub-skoneczny-portfolio-pwa/databases/(default)/documents"
});
