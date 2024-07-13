class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    // statusCode less than 400 rakh rhe h
    // Api Response me agr dikkat aati h toh 400 ke niche status code rkhenge
    // kyu ki apn ne 500 wala Api error ke liye select kr liya h
  }
}

export { ApiResponse };
