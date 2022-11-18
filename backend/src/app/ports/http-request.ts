type HttpRequest = {
  body: any;
  params: any;
  headers: any;
  file?: {
    filename?: string;
  };
  userId: string;
};

export default HttpRequest;
