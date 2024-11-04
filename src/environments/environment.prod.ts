import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true, 
  autoLogout: false,
  API_URL:  "https://dev.backend.pesteasyapp.com",
  Image_Base: "https://carcopys3.s3.ap-southeast-4.amazonaws.com/",
  S3_url: "https://carcopys3.s3.ap-southeast-4.amazonaws.com/",
};
