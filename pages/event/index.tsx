import { withAuth } from "../../src/components/commons/hocs/withAuth";
import EventContainer from "../../src/components/units/event/Event.container";

function EventPage() {
  return <EventContainer></EventContainer>;
}

export default withAuth(EventPage);
