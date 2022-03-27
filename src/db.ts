import axios from "axios";

const BASE_URL: string =
  "http://apis.data.go.kr/6260000/AirQualityInfoService/getAirQualityInfoClassifiedByStation";
const RESULT_TYPE: string = `resultType=json`;
const SERVICE_KEY: string = `serviceKey=sK%2B3tXRy%2Bh15TEMuv6qMBscE1G%2BJsLtm58RK2PGy6Xb3eEkbVXNVFOkgXM2WrSQAS12hL2H%2ByiNL8OwJhZOxBg%3D%3D`;
const API_URL: string = `${BASE_URL}?${SERVICE_KEY}&${RESULT_TYPE}`;

export const getAirQual = async (
  numOfRows?: number,
  pageNo?: number
): Promise<[]> => {
  const {
    data: {
      getAirQualityInfoClassifiedByStation: { item },
    },
  } = await axios(API_URL, {
    params: { numOfRows, pageNo },
  });
  console.log(item);
  return item;
};
