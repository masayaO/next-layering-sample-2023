import { Meeting } from "@/shared/types/meetings/types";
import { delay } from "@/shared/utils/delay";

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

  return {
    fetchMeetingList,
  };
};
