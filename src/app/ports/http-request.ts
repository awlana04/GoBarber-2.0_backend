type HttpRequest = {
  body: any;
  params: any;
  headers: any;
  file?: {
    filename?: string;
  };
  files?: string[] | any;
  userId?: string;
};

export default HttpRequest;
