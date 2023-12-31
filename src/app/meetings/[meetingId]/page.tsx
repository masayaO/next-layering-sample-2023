import PageTitle from "@/components/PageTitle";
import { useApiAccessMeeting } from "@/apiAccess/meetings/useApiAccessMeeting";
import MeetingDetail from "@/features/meetings/[meetingId]/components/MeetingDetail";

export default async function Page({
  params,
}: {
  params: { meetingId: number };
}) {
  const { fetchMeetingDetail } = useApiAccessMeeting();
  const meeting = await fetchMeetingDetail(params.meetingId);
  return (
    <>
      <PageTitle title={"会議詳細"} />
      <div>
        <MeetingDetail meeting={meeting} />
      </div>
    </>
  );
}
