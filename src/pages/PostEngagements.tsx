import DataTable from "../components/DataTable";
import { generateData } from "../fakeData";

console.log(generateData());

export default function PostEngagments() {
  return (
    <div className="px-8">
      <DataTable />
    </div>
  );
}
