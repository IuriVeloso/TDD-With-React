import axios from "axios";

const token = 'api-eaca9b9c-a95d-4b05-8532-653ce05b2053';

const api = axios.create({ baseURL: 'https://sandboxapi.reststate.org/',
  headers: {
    Authorization: `Bearer: ${token}`,
  },
});

export default api;
