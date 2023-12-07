type HttpRequest = {
  body: any;
  params: any;
  headers: any;
  file?: {
    filename?: string;
  };
  files?: String[];
  userId?: string;
};

export default HttpRequest;
