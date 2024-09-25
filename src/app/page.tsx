import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DockBar from "@/components/common/DockBar";

export default function Home() {
  return (
    <ProtectedRoute>
      <DockBar />
      <div className="p-10">
        <h1 className="text-2xl mb-4">Protected Page</h1>
        <p>This page is protected and only accessible to logged-in users.</p>
      </div>
    </ProtectedRoute>
  );
}
