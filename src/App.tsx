import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import PostEngagements from "./pages/PostEngagements";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-[800px] bg-gray-100">
      <Navbar />
      <div className="flex flex-grow">
        <div className="w-56">
          <Sidebar />
        </div>
        <div className="w-48 pt-16 pl-2">
          <Widget />
        </div>
        <div className="flex-grow">
          <PostEngagements />
        </div>
      </div>
    </div>
  );
}

export default App;
