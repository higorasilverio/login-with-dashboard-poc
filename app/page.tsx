import { DashboardLayout } from "@/components/dashboard-layout"
import { EventsPage } from "@/components/events-page"

export default function Home() {
  return (
    <DashboardLayout>
      <EventsPage />
    </DashboardLayout>
  )
}
