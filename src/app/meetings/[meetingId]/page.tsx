export default function Page({ params }: { params: { meetingId: number } }) {
  return <div>MeetingId: {params.meetingId}</div>;
}
