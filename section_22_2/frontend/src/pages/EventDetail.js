import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch Event." }), {
      status: 500,
    });
  }

  return response;
}
