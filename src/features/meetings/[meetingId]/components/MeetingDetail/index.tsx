import { Meeting } from "@/shared/types/meetings/types";

type Props = {
  meeting: Meeting;
};

export default function MeetingDetail({ meeting }: Props) {
  return (
    <div>
      <p>{`title: ${meeting.title}`}</p>
      <p>{`description: ${meeting.description}`}</p>
    </div>
  );
}
