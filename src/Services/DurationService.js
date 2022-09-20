import axios from "axios";

const getDuration = async (start, destination) => {
  const { data } = await axios.get(
    `http://localhost:8080/api/v1/connections/${start}/${destination}`
  );

  return data;
};

const DurationService = {
  getDuration,
};

export default DurationService;
