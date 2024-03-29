import { BASE_PATH } from "../utils/env";

/**
 * It creates a new bid.
 */
export async function addBidAPI(token, formData) {
  try {
    const compositeUrl = `${BASE_PATH}/ofertas/`;
    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const response = await fetch(compositeUrl, params);
    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
}
