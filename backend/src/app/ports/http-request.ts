type HttpRequest = {
  body: any;
  headers: any;
  file?: {
    filename?: string;
  };
  userId?: string;
};

export default HttpRequest;
