import { UserInfo } from "shared";

const API_BASE_URL = "http://localhost:4000";
const mapResponseToUserInfo = async (response: Response): Promise<UserInfo[]> => {
  try {
    if (response.ok) {
      const jsonArray = await response.json();

      if (Array.isArray(jsonArray)) {
        const userInfos: UserInfo[] = jsonArray.map((json) => ({
          email: json.email,
          number: json.number,
        }));
        console.log("Result: " + userInfos);
        return userInfos;
      } else {
        throw new Error("API Response is not an array of user information.");
      }
    } else {
      throw new Error(`API Error: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error processing API response: ${error}`);
  }
};

export const findMatchingRecords = async (requestData: UserInfo): Promise<UserInfo[]> => {
  try {
    const queryString: string = `email=${encodeURIComponent(requestData.email)}${
      requestData.number ? `&number=${encodeURIComponent(requestData.number)}` : ""
    }`;

    const response = await fetch(`${API_BASE_URL}/find-matching-records?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return await mapResponseToUserInfo(response);
    } else {
      throw new Error(`API Error: ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Fetch Error: ${error}`);
  }
};
