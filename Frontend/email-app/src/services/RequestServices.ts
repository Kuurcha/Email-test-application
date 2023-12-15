import { UserInfo } from "shared/index";

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

export const findMatchingRecords = async (requestData: UserInfo, signal: AbortSignal): Promise<UserInfo[]> => {
  try {
    const params = new URLSearchParams();
    params.append("email", encodeURIComponent(requestData.email));
    if (requestData.number) {
      params.append("number", encodeURIComponent(requestData.number));
    }

    const response = await fetch(`${API_BASE_URL}/find-matching-records?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: signal,
    });

    if (response.ok) {
      return await mapResponseToUserInfo(response);
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || response.statusText;
      throw new Error(errorMessage);
    }
  } catch (error) {
    throw new Error(` ${error}`);
  }
};
