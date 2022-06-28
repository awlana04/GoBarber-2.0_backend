type HttpResponse = {
  body?: any;
  status(statusCode: number): any;
  json(json: any): any;
};

export default HttpResponse;
