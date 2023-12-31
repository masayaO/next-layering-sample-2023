import { Meeting } from "@/types/meetings/types";
import { delay } from "@/utils/delay";

export const useApiAccessMeeting = () => {
  const fetchMeetingList = async (): Promise<Meeting[]> => {
    await delay(1000);
    return [
      {
        id: 1,
        title: "Meeting 1",
        description: "Meeting 1 description",
      },
      {
        id: 2,
        title: "Meeting 2",
        description: "Meeting 2 description",
      },
      {
        id: 3,
        title: "Meeting 3",
        description: "Meeting 3 description",
      },
    ];
  };

  const fetchMeetingDetail = async (id: number): Promise<Meeting> => {
    await delay(1000);
    return {
      id,
      title: `Meeting ${id}`,
      description: `Meeting ${id} description`,
    };
  };

  return {
    fetchMeetingList,
    fetchMeetingDetail,
  };
};
