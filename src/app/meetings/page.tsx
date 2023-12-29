import { useApiAccessMeeting } from "@/shared/hooks/apiAccess/meetings/useApiAccessMeeting";
import MeetingListItem from "@/features/meetings/components/MeetingListItem";
import PageTitle from "@/shared/components/PageTitle";

export default async function Page() {
  const { fetchMeetingList } = useApiAccessMeeting();
  const meetingList = await fetchMeetingList();

  return (
    <>
      <PageTitle title={"会議一覧"} />
      <div className="mt-2">
        {meetingList.map((meeting) => (
          <MeetingListItem meeting={meeting} key={meeting.id} />
        ))}
      </div>
    </>
  );
}
