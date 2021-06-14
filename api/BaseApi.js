class BaseApi {
  constructor(localVarPath) {
    const url =
      process.env.VUE_APP_API_URL || 'http://dnu5embx6omws.cloudfront.net/'
    this.api_url = `${url}venues/`
    this.local_var_path = localVarPath
  }

  get path() {
    return `${this.api_url}${this.local_var_path}`
  }
}
exports.default = BaseApi
