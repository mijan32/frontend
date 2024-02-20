import axios from 'axios'
const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_MOCK_RELYING_PARTY_SERVER_URL
    : window._env_.MOCK_RELYING_PARTY_SERVER_URL;
const fetchUserInfoEndPoint = "/fetchUserInfo"; 


const post_fetchUserInfo = async (
    code,
    client_id,
    redirect_uri,
    grant_type
  ) => {
    let request = {
      code: code,
      client_id: client_id,
      redirect_uri: redirect_uri,
      grant_type: grant_type,
    };
    const endpoint = baseUrl + fetchUserInfoEndPoint;
    console.log("end",endpoint);
    const response = await axios.post(endpoint, request, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("hello")
    console.log("response.data",response.data);
    return response.data;
  };


  const relyingPartyService = {
    post_fetchUserInfo,
  };
  export default relyingPartyService;